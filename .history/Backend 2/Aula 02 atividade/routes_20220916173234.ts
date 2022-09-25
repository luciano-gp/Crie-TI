import * as express from 'express';
import { Router } from 'express';
import { Consulta } from './Consulta';
const usersController = require('../controllers/UsersController');

const validateUserId = async (req, res, next) => {
    const consulta = await Consulta.findByPk(req.params.consultaId);
    if (!consulta) {
        return res.status(404).json({ error: 'Consulta não existente' });
    }
    next();
}

export const router = Router();

router.get('/users', usersController.index);

router.get('/users/:userId', validateUserId, usersController.show);

router.post('/users', usersController.create);

router.put('/users/:userId', validateUserId, usersController.update);

router.delete('/users/:userId', validateUserId, usersController.delete);

module.exports = router;