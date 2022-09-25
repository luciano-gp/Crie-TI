import {sequelize} from './sequelize';
import * as express from 'express';
import * as path from 'path';

const PORT = 3000;

const app: express.Application = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});