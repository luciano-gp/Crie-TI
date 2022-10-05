import express, { application, Express, Request, Response } from 'express';
import Usuario from './model/Usuario';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/auth', async (req: Request, res: Response) => {
    let username = req.headers.username+'';
    let password = req.headers.password+'';
    let logado = await Usuario.localizaUsuario(username, password);
    res.json(logado);
});

app.get('/verify', async (req: Request, res: Response) => {
    let username = req.headers.username+'';
    let password = req.headers.password+'';
    console.log(username, password);
    let logado = await Usuario.localizaUsuario(username, password);
    res.json(logado);
});

app.listen(3001, () => {
    console.log("Back online!");
});