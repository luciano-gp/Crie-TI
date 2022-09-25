import { Log } from './Log';
export class ConsultaController {

    index = async (req, res, next) => {
        const consultas = await Log.findAll();
        res.json(consultas);
    }

    create = async (req, res, next) => {
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

    _verificaExistente = async (url: any) => {
        url = new URL(url);
        let params: any = new URLSearchParams(url.getAll());
        console.log(params);
    }
}