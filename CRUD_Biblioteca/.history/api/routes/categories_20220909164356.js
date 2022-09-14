const router = require('express').Router();
const CategorieModel = require('../models/Categorie');
const categoriesController = require('../controllers/CategorieController');

const validateCategorieId = async (req, res, next) => {
  const categorie = await CategorieModel.findByPk(req.params.categorieId);
  if (!categorie) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/categories', categoriesController.index);

router.post('/categories', categoriesController.create);

router.get('/categories/:categorieId', validateCategorieId, categoriesController.show);

router.put('/categories/:categorieId', validateCategorieId, categoriesController.update);

router.delete('/categories/:categorieId', validateCategorieId, categoriesController.delete);

module.exports = router;
