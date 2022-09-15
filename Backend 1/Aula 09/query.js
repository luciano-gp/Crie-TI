const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));
})();