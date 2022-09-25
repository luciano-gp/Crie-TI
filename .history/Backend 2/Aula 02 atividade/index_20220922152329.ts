import * as express from 'express';
import { Consulta } from './Consulta';
import { router } from './router';
import axios, { Axios, responseEncoding } from 'axios';
import * as bodyParser from "body-parser";
import * as xml2js from 'xml2js';

Consulta.sync();

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

const validaConsulta = async (req, res, next) => {
  const consulta = await Consulta.findOne({where: { url: req.url}});
  if (consulta) {
      console.log('entrei no if')
      return consulta;
  } else {
    console.log ('entrei no else')
      next();
  }
}

const fazConsulta = async (req, res) => {
  console.log('vou fazer a consulta')
  const consultaNova = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?${req.url} `);
  console.log(consultaNova.data);
  await Consulta.create({
      url: req.url,
      valor: 0
  });
}

app.get('/', validaConsulta, fazConsulta);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});