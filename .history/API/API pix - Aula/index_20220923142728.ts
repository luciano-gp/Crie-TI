import express, { Express, Request, Response, NextFunction } from 'express';
import axios from 'axios';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

const PORT = 3000;
const app: Express = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
});

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await axios.get('users');
    res.json(users);
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});