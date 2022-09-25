// import * as express from 'express';
import { Router } from 'express';
// import { Log } from './Log';
import { LogController } from './controller';
import { Axios } from 'axios';
let logController = new LogController();

export const router = Router();

router.get('/pix', logController.index);

router.post('/pix', logController.create);