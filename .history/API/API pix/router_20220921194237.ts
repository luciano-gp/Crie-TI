import { Router } from 'express';
import { LogController } from './controller';
import { AxiosController } from './axios';
const logController = new LogController();
const axiosController = new AxiosController();

export const router = Router();

router.get('/pix', getPix);

router.post('/pix', setPix, logController.create);