import * as express from 'express';
import { Router } from 'express';
import { Consulta } from './Consulta';
import { ConsultaController } from './controller';
let consultaController = new ConsultaController();

const validaConsultaId = async (req, res, next) => {
    const consulta = await Consulta.count({where: { url: req.url}});
    if (consulta) {
        const data = await Consulta.findOne({where: {url: req.url}});
        res.json(data);
    } else {
        Consulta.create({
            url: req.url,
            valor: 0
        })
    }
    next();
}

export const router = Router();

router.get('/consultas', consultaController.index);