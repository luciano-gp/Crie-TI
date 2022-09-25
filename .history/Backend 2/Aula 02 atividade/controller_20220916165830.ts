import { OP } from 'sequelize';
import { Consulta } from './Consulta';

export class ConsultaController {

    index = async (req, res, next) => {
        const users = await User.findAll();
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