import {sequelize} from './sequelize';
import * as express from 'express';
import * as path from 'path';
import { Consulta } from './Consulta';
Consulta.sync();

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});