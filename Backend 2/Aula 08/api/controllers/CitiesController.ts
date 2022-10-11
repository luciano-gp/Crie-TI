import { Op } from 'sequelize';
import { City } from '../models/City';
import { State } from '../models/State';
import { Request, Response, NextFunction } from 'express';

class CitiesController {

  index = async (req: Request, res: Response, next: NextFunction) => {

    const cities = await City.findAll({
      include: [{
        model: State,
        required: false,
        attributes: ['name', 'province']
      }]
    });

    res.json(cities);
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body);
      const city = await City.create(data);
      res.json(city);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  show = async (req: Request, res: Response, next: NextFunction) => {
    const state = await City.findByPk(req.params.cityId);
    res.json(state);
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.cityId;
      const data = await this._validateData(req.body);
      await City.update(data, {
        where: {
          id: id
        }
      });
      res.json(await City.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await City.destroy({
      where: {
        id: req.params.cityId
      }
    });
    res.json({});
  }

  _validateData = async (data: any) => {
    const attributes = ['name', 'StateId'];
    const city: any = { };
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      city[attribute] = data[attribute];
    }

    if (await this._checkIfCityAndStateExists(city.name, city.StateId)) {
      throw new Error(`The city in the State "${city.StateId}" already exists.`);
    }

    return city;
  }

  _checkIfCityAndStateExists = async (name: string, state: string) => {
    const cities = await City.count({
      where: {
        [Op.and]: [
          { StateId: state },
          { name: name }
        ]
      }
    });

    return cities > 0;
  }

}

export const citiesController = new CitiesController();