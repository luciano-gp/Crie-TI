import express, { Express, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import { Usuario } from './model/Usuario';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use(session({
    name: "mynodelogin",
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', async (req: Request, res: Response) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        let logado = await Usuario.localizaUsuario(username, password);
        res.send('Logado');
        res.end();
    } else {
        res.send('Erro de login');
        res.end();
    }
})

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});