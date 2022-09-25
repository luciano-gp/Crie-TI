import * as express from 'express';
import { Consulta } from './Consulta';
import axios from 'axios';
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
  const consulta = await Consulta.findOne({ where: { url: req.url } });
  if (consulta) {
    console.log(consulta);
  } else {
    next();
  }
}

const fazConsulta = async (req, res) => {
  const consultaNova = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?${req.url} `);
  await Consulta.create({
    url: req.url,
    xml: consultaNova.data
  });
  const json: any = await xml2js.parseStringPromise(consultaNova);
  console.log(json);
  // res.JSON.parse(JSON.stringify(json));
}

app.get('/:params', validaConsulta, fazConsulta);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});