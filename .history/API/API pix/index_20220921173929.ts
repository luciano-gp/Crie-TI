import * as express from 'express';
import { Log } from './Log';
import { router } from './router';
Log.sync();

const PORT = 3001;

const app: express.Application = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

app.use(router);

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});