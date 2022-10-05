import express, { application, Express, Request, Response } from 'express';
import Usuario from './model/Usuario';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

async function authentication(req: Request) {
    let ascii = Buffer.from(((req.headers.authorization+'').replace('Basic ', '')), 'base64').toString('ascii').split(':');
    return await Usuario.localizaUsuario(ascii[0], ascii[1]);
}

app.get('/auth', async (req: Request, res: Response) => {
    res.json(await authentication(req));
});

app.get('/verify', async (req: Request, res: Response) => {
    res.json(await authentication(req));
});

app.listen(3001, () => {
    console.log("Back online!");
});