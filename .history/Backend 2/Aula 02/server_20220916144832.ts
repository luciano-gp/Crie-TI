import {sequelize} from './sequelize';
import * as express from 'express';
import * as path from 'path';

const routes = require('./routes/index');

const PORT = 3000;

const app: express.Application = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});