import * as express from 'express';
import { Consulta } from './Consulta';
import { router } from './router';
Consulta.sync();

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.query}`);
  next();
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});