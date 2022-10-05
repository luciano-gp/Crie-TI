const { Op } = require('sequelize');
const CityModel = require('../models/City');
const StateModel = require('../models/State');
const axios = require('axios');

class CitiesController {

  index = async (req, res, next) => {
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

    if (params.StateId) {
      where.StateId = {
        [Op.iLike]: `%${params.StateId}%`
      };
    }
    let cities = await CityModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]],
      include: [{
        model: StateModel,
        required: false,
        attributes: ['name']
      }]
    });
    res.json(cities);
  }

  create = async (req, res, next) => {
    try {
      const data = await this._validateData(req.body);
      const city = await CityModel.create(data);
      res.json(city);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  show = async (req, res, next) => {
    const city = await CityModel.findByPk(req.params.cityId);
    res.json(city);
  }

  update = async (req, res, next) => {
    try {
      const id = req.params.cityId;
      const data = await this._validateData(req.body, id);
      await CityModel.update(data, {
        where: {
          id: id
        }
      });
      res.json(await CityModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  delete = async (req, res, next) => {
    await CityModel.destroy({
      where: {
        id: req.params.cityId
      }
    });
    res.json({});
  }

  _validateData = async (data, id) => {
    const attributes = ['name', 'StateId', 'cep'];
    const cities = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      cities[attribute] = data[attribute];
    }
    console.log(cities.cep);
    if (data.cep.length < 9) {
      throw new Error(`The attribute "CEP" is INVALID   [ XXXXXX-XXX ].`);
    }
    if (await this._checkCep(cities.cep)) {
      throw new Error(`The CEP  is invalid or already exists.`);
    }

    if (await this._checkDescriptionIfExists(cities.name, cities.StateId, cities.cep, id)) {
      throw new Error(`The city "${cities.name}" already exists.`);
    }
    return cities;
  }

  _checkCep = async (cep) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (response.status === 200) {
          const cep = response.data;
          console.log(cep.cep);
          if (cep.cep) {
            return cep.cep;
          }
          return false;
        }
      })
  }

  _checkDescriptionIfExists = async (name, state, cep, id) => {
    const where = {
      name: name,
      cep: cep,
      StateId: state,
    };
    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }
    const count = await CityModel.count({
      where: where
    });
    return count > 0;
  }
}
module.exports = new CitiesController();
