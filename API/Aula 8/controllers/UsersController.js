const User = require('../models/User');

class UsersController {
    index = async (req, res, next) => {
        const users = await User.all();
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
        const user = await User.find(req.params.userId);
        res.json(user);
    }

    update = async (req, res, next) => {
        try {
            const id = req.params.userId;
            const data = await this._validateData(req.body, id);
            const user = await User.update(data, Number(req.params.userId));
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    delete = async (req, res, next) => {
        await User.delete(req.params.userId);
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
        const users = await User.all();
        const user = users.find((user) => user.email === email && user.id !== Number(id));
        return Boolean(user);
    }

    _validateUserId = async (req, res, next) => {
        const user = await User.find(req.params.userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        next();
    }
}

module.exports = new UsersController();