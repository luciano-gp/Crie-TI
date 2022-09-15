const {Op} = require('sequelize');
const User = require('../models/User');

class UsersController {

    index = async (req, res, next) => {
        const params = req.query;
        const limit = params.limit || 10;
        const page = params.page || 1;
        const offset = (page - 1) * limit;
        const sort = params.sort || 'id';
        const order = params.order || 'ASC';
        const where = {};

        if (params.name) {
            where.name = {
                [Op.iLike]: `%${params.name}%`
            }
        }

        if (params.email) {
            where.email = {
                [Op.iLike]: `%${params.email}%`
            }
        }

        if (params.min_age) {
            where.age = {
                [Op.gte]: params.min_age
            }
        }

        if (params.max_age) {
            if (!where.age) {
                where.age = {};
            }
            where.age[Op.lte] = params.max_age;
        }

        if (params.sex) {
            where.sex = params.sex
        }

        const users = await User.findAll({
            where: where,
            limit: limit,
            offset: offset,
            order: [ [sort, order] ]
        });
        res.json(users);
    }

    create = async (req, res, next) => {
        try {
            const data = await this._validateData(req.body);
            const user = await User.create(data);
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    show = async (req, res, next) => {
        const user = await User.findByPk(req.params.userId);
        res.json(user);
    }

    update = async (req, res, next) => {
        try {
            const id = req.params.userId;
            const data = await this._validateData(req.body, id);
            await User.update(data, {
                where: {
                    id: id
                }
            });
            res.json(await User.findByPk(id));
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    delete = async (req, res, next) => {
        await User.destroy({
            where: {
                id: req.params.userId
            }
        });
        res.json({});
    }

    _validateData = async (data, id) => {
        const attributes = ['name', 'age', 'sex', 'email'];
        const user = {};
        for (const attribute of attributes) {
            if (!data[attribute]) {
                throw new Error(`The attribute "${attribute}" is required.`);
            }
            user[attribute] = data[attribute];
        }
        if (await this._checkIfEmailExists(user.email, id)) {
            throw new Error(`The user with mail address "${user.email}" already exists.`);
        }
        return user;
    }

    _checkIfEmailExists = async (email, id) => {

        const where = {
            email: email
        }

        if (id) {
            where.id = {[Op.ne]: id};
        }

        const count = await User.count({
            where: where
        })

        return count > 0;
    }
}

module.exports = new UsersController();