import { Consulta } from './Consulta';
import axios, { Axios, responseEncoding } from 'axios';
export class ConsultaController {

    index = async (req, res, next) => {
        try {
            const verifica = await this._verificaExistente(req.url);
            if (verifica) {
                const consulta = await Consulta.findOne({
                    where: {
                        url: req.url
                    }
                });
                res.json(consulta);
            } else {
                const consulta = await axios.get(req.params);
                await Consulta.create({
                    url: req.url,
                    valor: 0
                })
                res.json(consulta.data);
            }
        } catch (err) {
            res.status(500).json({ error: err.message });
        }

        const consultas = await Consulta.findAll();
        res.json(consultas);
    }

    _verificaExistente = async (url: any) => {
        let count = await Consulta.count({
            where: {
                'url': url
            }
        });
        if (count) {
            return true;
        } else {
            return false;
        }
    }
}