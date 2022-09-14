const { Op } = require('sequelize');
const CategorieModel = require('../models/Categorie');

class CategoriesController {

  index = async (req, res, next) => {
    const params = req.query;
    const limit = params.limit || 100;
    const page = params.page || 1;
    const offset = (page - 1) * limit;
    const sort = params.sort || 'id';
    const order = params.order || 'ASC';
    const where = {};

    if (params.description) {
      where.description = {
        [Op.iLike]: `%${params.description}%`
      };
    }

    const categories = await CategorieModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]]
    });
    res.json(categories);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const categorie = await CategorieModel.create(data);
      res.json(categorie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const categorie = await CategorieModel.findByPk(req.params.categorieId);
    res.json(categorie);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.categorieId;
      const data = await this._validateData(req.body, id);
      await CategorieModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await CategorieModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await CategorieModel.destroy({
      where: {
        id: req.params.categorieId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['description'];
    const categorie = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      categorie[attribute] = data[attribute];
    }

    if (await this._checkDescriptionIfExists(categorie.description, id)) {
      throw new Error(`The description "${categorie.description}" already exists.`);
    }

    return categorie;
  }

  _checkDescriptionIfExists = async (description, id) => {
    const where = {
      description: description
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await CategorieModel.count({
      where: where
    });

    return count > 0;
  }

}

module.exports = new CategoriesController();
