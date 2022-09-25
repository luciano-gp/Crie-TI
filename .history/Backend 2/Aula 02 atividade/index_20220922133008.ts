import { Consulta } from './Consulta';
import * as express from 'express';
import axios from 'axios';
import { sequelize } from './sequelize'
import { request } from 'http';

const app = express();
const port = 3000;

axios.defaults.baseURL = 'http://ws.correios.com.br'

/CalcPrecoPrazo.aspx?sCepOrigem=95912024&sCepDestino=95900718&nVlPeso=30&nCdFormato=1&nVlComprimento=28.75&nVlAltura=11.5&nVlLargura=11.5&nVlDiametro=0&sCdMaoPropria=n&nVlValorDeclarado=0&sCdAvisoRecebimento=n&StrRetorno=xml&nCdServico=41106

let consulta = {
  sCepOrigem: 95912024,
  sCepDestino: 95900718,
  nVlPeso: 30,
  nCdFormato: 1,
  nVlComprimento: 28.75,
  nVlAltura: 11.5,
  nVlLargura: 11.5,
  nVlDiametro: 0,
  sCdMaoPropria: 'n',
  nVlValorDeclarado: 0,
  sCdAvisoRecebimento: 'n',
  StrRetorno: 'xml',
  nCdServico: 41106
}

app.get('/calculador', async (req, res) => {

  const consulta = await Consulta.findOne({
    where: {
      url: req.url
    }
  });

  if (consulta) {
    res.json(consulta);
  } else {
    const data = await axios.get(url);
    res.json(data.data);
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});