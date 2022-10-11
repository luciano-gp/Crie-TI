import express, { Request, Response, NextFunction } from 'express';
import { statesController } from '../controllers/StatesController';
import { State } from '../models/State';
const router = express.Router();

const validateStateId = async (req: Request, res: Response, next: NextFunction) => {
    const state = await State.findByPk(req.params.stateId);
    if (!state) {
        return res.status(404).json({ error: 'State not found' });
    }
    next();
}

router.post('/states', statesController.create);

router.get('/states', statesController.index);

router.get('/states/:stateId', validateStateId, statesController.show);

router.put('/states/:stateId', validateStateId, statesController.update);

router.delete('/states/:stateId', validateStateId, statesController.delete);

export { router as statesRouter }