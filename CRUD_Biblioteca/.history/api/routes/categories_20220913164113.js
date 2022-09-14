const router = require('express').Router();
const CategoryModel = require('../models/Category');
const categoryController = require('../controllers/CategoryController');

const validateCategoryId = async (req, res, next) => {
  const category = await CategoryModel.findByPk(req.params.categoryId);
  if (!category) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

router.get('/categories', categoriesController.index);

router.post('/categories', categoriesController.create);

router.get('/categories/:categoryId', validateCategoryId, categoryController.show);

router.put('/categories/:categoryId', validateCategoryId, categoryController.update);

router.delete('/categories/:categoryId', validateCategoryId, categoryController.delete);

module.exports = router;
