import {sequelize} from './sequelize';
import * as express from 'express';

const routes = require('./routes/index');

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});