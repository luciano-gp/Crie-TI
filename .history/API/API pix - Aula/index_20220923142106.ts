import express, {Express, Request, Response, NextFunction} from 'express';
import axios from 'axios';

const app: Express = express();

app.use(express.json());

app.get('/ola', (req: Request, res: Response, next: NextFunction) => {
    res.json({ content: 'Olá mundo' });
})

app.listen(3000);