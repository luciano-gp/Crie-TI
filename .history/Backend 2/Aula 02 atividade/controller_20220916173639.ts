import { Consulta } from './Consulta';
export class ConsultaController {

    static index = async (req, res, next) => {
        const consultas = await Consulta.findAll();
        res.json(consultas);
    }

    static create = async (req, res, next) => {
        try {
            const verifica = await this._verificaExistente(req.query);
            // if (verifica) {
            //     const consulta = await Consulta.create(data);
            //     res.json(consulta);
            // }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static show = async (req, res, next) => {
        const user = await Consulta.findByPk(req.params.userId);
        res.json(user);
    }

    static delete = async (req, res, next) => {
        await Consulta.destroy({
            where: {
                id: req.params.userId
            }
        });
        res.json({});
    }

    _verificaExistente = async (url: any) => {
        url = new URL(url);
        let params: any = new URLSearchParams(url.getAll());
        console.log(params);
    }
}