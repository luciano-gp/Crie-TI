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
  let consulta = await Consulta.findOne({ where: { url: req.url } });
  if (consulta) {
    console.log(JSON.parse(consulta));
  } else {
    const consultaNova = await axios.get(`http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?${req.url} `);
    let xml = consultaNova.data;
    let stringXML :any = await xml2js.parseStringPromise(xml);
    stringXML = JSON.stringify(stringXML);
    await Consulta.create({
      url: req.url,
      stringXML: stringXML
    });
  }
}

app.get('/:params', validaConsulta);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});