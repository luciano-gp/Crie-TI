import * as express from 'express';
import { Router } from 'express';
import { Consulta } from './Consulta';
import { ConsultaController } from './controller';
let consultaController = new ConsultaController();

const validaConsultaId = async (req, res, next) => {
    const consulta = await Consulta.findByPk(req.params.consultaId);
    if (!consulta) {
        return res.status(404).json({ error: 'Consulta não existente' });
    }
    next();
}

export const router = Router();

router.get('/consultas', consultaController.index);