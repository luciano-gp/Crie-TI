const { Op, QueryTypes } = require('sequelize');
const CityModel = require('../models/City');
const StateModel = require('../models/State');
const PublisherModel = require('../models/Publisher');
const BookModel = require('../models/Book');
const CategorieModel = require('../models/Categorie');
const FormatModel = require('../models/Format');
const db = require('../db');

class BookController {

  index = async (req, res, next) => {
    const books = await BookModel.findAll({
      order: [
        ['title', 'DESC']
      ],
      include: [{
        model: PublisherModel,
        required: false,
        attributes: ['id', 'name'],
        include: [{
          model: CityModel,
          required: false,
          attributes: ['id', 'name'],
          include: [{
            model: StateModel,
            required: false,
            attributes: ['id', 'name', 'province'],
          }]
        }]
      },
      {
        model: CategorieModel,
        required: false,
        attributes: ['id', 'description'],
      },
      {
        model: FormatModel,
        required: false,
        attributes: ['id', 'description'],
      }
      ],
    });
    const params = req.query;
    const limit = params.limit || 100;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.name) {
      where.name = {
        [Op.iLike]: `%${params.name}%`
      };
    }
    if (params.province) {
      where.province = {
        [Op.iLike]: `%${params.province}%`
      };
    }
    res.json(books);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const book = await BookModel.create(data);
      res.json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const book = await BookModel.findByPk(req.params.bookId);
    res.json(book);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.bookId;
      const data = await this._validateData(req.body, id);
      await BookModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await BookModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await BookModel.destroy({
      where: {
        id: req.params.bookId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['title', 'author', 'publication_year', 'pages', 'value', 'CategorieId', 'PublisherId', 'FormatId'];
    const book = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      book[attribute] = data[attribute];
    }

    if (await this._checkDescriptionIfExists(book.title, id)) {
      throw new Error(`The name "${book.name}" already exists.`);
    }

    return book;
  }

  _checkDescriptionIfExists = async (title, id) => {
    const where = {
      title: title,
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await BookModel.count({
      where: where
    });

    return count > 0;
  }
}
module.exports = new BookController();
