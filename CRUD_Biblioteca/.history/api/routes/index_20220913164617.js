const cors = require('cors');
const router = require('express').Router();
const books = require('./books');
const categories = require('./categories');
const cities = require('./cities');
const formats = require('./formats');
const publishers = require('./publishers');
const states = require('./states');
const users = require('./users');

router.use(cors());

router.use(books);
router.use(categories);
router.use(cities);
router.use(formats);
router.use(publishers);
router.use(states);
router.use(users);

module.exports = router;