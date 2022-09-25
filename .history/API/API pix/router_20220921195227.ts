import { Router } from 'express';
import { LogController } from './controller';
import { AxiosController } from './axios';
const logController = new LogController();
const axiosController = new AxiosController();

export const router = Router();

router.get('/pix', axiosController.getPix);

router.get('/pix/:userId/:type', axiosController.getOnlyPix)

router.post('/pix', axiosController.setPix, logController.create);