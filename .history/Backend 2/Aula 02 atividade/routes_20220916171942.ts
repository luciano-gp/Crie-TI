const router = require('express').Router();
const User = require('../models/User');
const usersController = require('../controllers/UsersController');

const validateUserId = async (req, res, next) => {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    next();
}

router.get('/users', usersController.index);

router.get('/users/:userId', validateUserId, usersController.show);

router.post('/users', usersController.create);

router.put('/users/:userId', validateUserId, usersController.update);

router.delete('/users/:userId', validateUserId, usersController.delete);

module.exports = router;