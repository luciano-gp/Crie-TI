// import * as express from 'express';
import { Router } from 'express';
// import { Log } from './Log';
import { LogController } from './controller';
import axios, {AxiosResponse} from 'axios';
let logController = new LogController();

export const router = Router();

router.get('/pix', axios.get('http://177.44.248.30/v1/pix'));

router.post('/pix', logController.create);