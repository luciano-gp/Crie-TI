const router = require('express').Router();
const PublisherModel = require('../models/Publisher');
const publishersController = require('../controllers/PublisherController');

const validatePublisherId = async (req, res, next) => {
  const publisher = await PublisherModel.findByPk(req.params.publisherId);
  if (!publisher) {
    return res.status(404).json({ error: 'Publisher not found' });
  }
  next();
}

router.get('/publishers', publishersController.index);

router.post('/publishers', publishersController.create);

router.get('/publishers/:publisherId', validatePublisherId, publishersController.show);

router.put('/publishers/:publisherId', validatePublisherId, publishersController.update);

router.delete('/publishers/:publisherId', validatePublisherId, publishersController.delete);

module.exports = router;
