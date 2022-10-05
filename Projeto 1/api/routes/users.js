const router = require('express').Router();
const UserModel = require('../models/User');
const usersController = require('../controllers/UsersController');

const validateUserId = async (req, res, next) => {
  const user = await UserModel.findByPk(req.params.userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  next();
}

const validateUser = async (req, res, next) => {
  const count = await UserModel.count({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  });
  res.json(count);
}

router.get('/users', usersController.index);

router.post('/users', usersController.create);

router.post('/validateUser', validateUser);

router.get('/users/:userId', validateUserId, usersController.show);

router.put('/users/:userId', validateUserId, usersController.update);

router.delete('/users/:userId', validateUserId, usersController.delete);

module.exports = router;
