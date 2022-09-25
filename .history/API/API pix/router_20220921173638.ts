import { Router } from 'express';
import { LogController } from './controller';
import { getPix, setPix } from './axios';
let logController = new LogController();

export const router = Router();

router.get('/pix', getPix);

router.post('/pix', logController.create);