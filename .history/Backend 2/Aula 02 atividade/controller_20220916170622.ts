import { OP } from 'sequelize';
import { Consulta } from './Consulta';

export class ConsultaController {

    index = async (req, res, next) => {
        const users = await User.findAll();
        res.json(users);
    }

    create = async (req, res, next) => {
        try {
            const verifica = await this._verificaExistente(req.body);
            if (verifica) {
                const consulta = await Consulta.create(data);
                res.json(consulta);
            }
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

    _verificaExistente = async (url: string) => {

    }
}