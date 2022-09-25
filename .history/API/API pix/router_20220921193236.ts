import { Router } from 'express';
import { LogController } from './controller';
import { getPix, setPix } from './axios';
let logController = new LogController();

export const router = Router();

router.get('/pix', async (req, res) => {
    const data = await getPix;
    res.json(data);
});

router.post('/pix', setPix, logController.create);