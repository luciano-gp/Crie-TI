import { Consulta } from './Consulta';
export class ConsultaController {

    index = async (req, res, next) => {
        const consultas = await Consulta.findAll();
        res.json(consultas);
    }

    create = async (req, res, next) => {
        try {
            const verifica = await this._verificaExistente(req.query);
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

    _verificaExistente = async (url: any) => {
        url = new URL(url);
        let params: string = new URLSearchParams(url.getAll());
    }
}