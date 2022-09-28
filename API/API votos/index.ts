import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { Vote } from './Vote';
import { sequelize } from './sequelize';

sequelize.sync();

const PORT = 3000;
const app: Express = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`[${new Date()}] ${req.method} ${req.url}`);
    next();
});

app.get('/votes', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const votes = await Vote.findAll();
        res.json(votes);
    } catch (err) {
        res.status(400).json({ Error: (err as Error).message });
    }
});

app.post('/vote', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newVote = await Vote.create({
            candidate: "candidate",
            role: "role",
            party: "party"
        });
        res.json(newVote);
    } catch (err) {
        res.status(400).json({ Error: (err as Error).message });
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});