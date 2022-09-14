const router = require('express').Router();
const CityModel = require('../models/City');
const citiesController = require('../controllers/CityController');

const validateCitieId = async (req, res, next) => {
  const city = await CityModel.findByPk(req.params.cityId);
  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  next();
}

router.get('/cities', citiesController.index);

router.post('/cities', citiesController.create);

router.get('/cities/:cityId', validateCitieId, citiesController.show);

router.put('/cities/:cityId', validateCitieId, citiesController.update);

router.delete('/cities/:cityId', validateCitieId, citiesController.delete);

module.exports = router;
