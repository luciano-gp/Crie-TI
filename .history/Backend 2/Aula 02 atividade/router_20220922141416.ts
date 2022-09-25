import * as express from 'express';
import { Router } from 'express';
import { Consulta } from './Consulta';
import { ConsultaController } from './controller';
let consultaController = new ConsultaController();

const validaConsultaId = async (req: Request, res: Response, next) => {
    const consulta = await Consulta.count({where: { url: req.url}});
    if (consulta) {
        const data = await Consulta.findOne({where: {url: req.url}});
        res.json(data);
    } else {
        await Consulta.create({
            url: req.url,
            valor: 0
        })
        next();
    }
}

const fazConsulta = async (req: Request, res: Response) => {

}

export const router = Router();

router.get('/consultas', validaConsultaId, fazConsulta);