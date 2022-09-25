import * as express from 'express';
import { Router } from 'express';
import axios, { Axios, responseEncoding } from 'axios';
import { Consulta } from './Consulta';
import { ConsultaController } from './controller';
let consultaController = new ConsultaController();

const validaConsultaId = async (req, res, next) => {
    const consulta = await Consulta.count({where: { url: req.url}});
    if (Boolean(consulta)) {
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

const fazConsulta = async (req, res) => {
    let url = req.url;
    url = url.split('/');
    url = url[url.length - 1];
    const consultaNova = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?${url}`);
    console.log(consultaNova);
}

export const router = Router();

router.get('/consultas', validaConsultaId, fazConsulta);