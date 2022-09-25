import * as express from 'express';
import { Consulta } from './Consulta';
import { router } from './router';
Consulta.sync();

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

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

router.get('/', validaConsultaId, fazConsulta);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});