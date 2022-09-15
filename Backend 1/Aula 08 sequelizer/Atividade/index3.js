const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./insertUsers.js');
const users = require('./usuarios.json');

(async () => {
    await User.sync({force: true});

    users.forEach((user) => {
        User.create({
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate
        });
    });
})();