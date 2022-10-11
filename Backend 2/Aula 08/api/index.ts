import dotenv from 'dotenv';
dotenv.config();
import express, { Express, NextFunction, Request, Response } from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`[${new Date()}] ${req.method} ${req.url}`);
  next();
});

app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`);
});
