import { Router } from 'express';
import axios, { Axios, responseEncoding } from 'axios';
import { Consulta } from './Consulta';

const validaConsultaId = async (req, res, next) => {
    const consulta = await Consulta.findOne({where: { url: req.url}});
    console.log(consulta);
    if (consulta) {
        console.log('if');
        const data = await Consulta.findOne({where: {url: req.url}});
        res.json(data);
    } else {
        console.log('else');
        next();
    }
}

const fazConsulta = async (req, res) => {
    let url = req.url;
    url = url.split('/');
    url = url[url.length - 1];
    const consultaNova = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?${url}`);
    console.log(consultaNova);
    await Consulta.create({
        url: req.url,
        valor: 0
    });
}

export const router = Router();

router.get('/', validaConsultaId, fazConsulta);