import { Router } from 'express';
import { LogController } from './controller';
import { Axios } from 'axios';
axios.defaults.baseURL = 'http://177.44.248.30/v1/';

let logController = new LogController();

export const router = Router();

router.get('/pix', axios.get('pix'));

router.post('/pix', logController.create);