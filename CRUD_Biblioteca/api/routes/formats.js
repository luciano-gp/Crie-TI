const router = require('express').Router();
const FormatModel = require('../models/Format');
const formatsController = require('../controllers/FormatController');

const validateFormatId = async (req, res, next) => {
  const format = await FormatModel.findByPk(req.params.formatId);
  if (!format) {
    return res.status(404).json({ error: 'Format not found' });
  }
  next();
}

router.get('/formats', formatsController.index);

router.post('/formats', formatsController.create);

router.get('/formats/:formatId', validateFormatId, formatsController.show);

router.put('/formats/:formatId', validateFormatId, formatsController.update);

router.delete('/formats/:formatId', validateFormatId, formatsController.delete);

module.exports = router;
