import express, { Request, Response, NextFunction } from 'express';
import { citiesController } from '../controllers/CitiesController';
import { City } from '../models/City';
const router = express.Router();

const validateCityId = async (req: Request, res: Response, next: NextFunction) => {
    const city = await City.findByPk(req.params.cityId);
    if (!city) {
        return res.status(404).json({ error: 'City not found' });
    }
    next();
}

router.post('/cities', citiesController.create);

router.get('/cities', citiesController.index);

router.get('/cities/:cityId', validateCityId, citiesController.show);

router.put('/cities/:cityId', validateCityId, citiesController.update);

router.delete('/cities/:cityId', validateCityId, citiesController.delete);

export { router as citiesRouter }