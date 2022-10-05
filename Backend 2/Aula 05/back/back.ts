import express, { application, Express, Request, Response } from 'express';
import cors from 'cors';
import Usuario from './model/Usuario';
import session from 'express-session';
import * as SessionData from './types/types';

const app = express();
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    name: 'mynodelogin',
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.get('/auth', async (req: Request, res: Response) => {
    let logado = await Usuario.localizaUsuario(req.query.username+'', req.query.password+'');

    if (logado && logado.id) {
        req.session.loggedIn = true;
        req.session.username = logado.nome;
        req.session.userId = logado.id;
        req.session.email = logado.email;
        req.session.type = 'admin';
        res.json(true);
    } else {
        res.json(false);
    }
});

app.get('/verify', async (req: Request, res: Response) => {
    let result = {
        loggedIn: req.session.loggedIn,
        userId: req.session.userId,
        userName: req.session.username,
        type: req.session.type
    }
    res.json(result);
});

app.get('/out', async (req: Request, res: Response) => {
    req.session.destroy(() => console.log('deslogando...'));
});

app.listen(3000, () => {
    console.log("Back online!");
});