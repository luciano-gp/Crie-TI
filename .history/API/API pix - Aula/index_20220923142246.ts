import express, {Express, Request, Response, NextFunction} from 'express';
import axios from 'axios';
axios.defaults.baseURL = 'http://177.44.248.30/v1';

const app: Express = express();

app.use(express.json());

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    
    res.json({ content: 'Olá mundo' });
})

app.listen(3000);