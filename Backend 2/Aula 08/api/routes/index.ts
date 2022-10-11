import cors from 'cors';
import express, { } from 'express';
const router = express.Router();
import { usersRouter } from './users';
import { loginRouter } from './login';
import { statesRouter } from './states';
import { citiesRouter } from './cities';

router.use(cors());

router.use(loginRouter);
router.use(usersRouter);
router.use(statesRouter);
router.use(citiesRouter);

export default router;