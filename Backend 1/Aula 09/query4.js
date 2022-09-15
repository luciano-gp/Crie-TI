const { Sequelize, Op } = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    await User.update({ firstName: 'Matheus' }, {
        where: {
            firstName: 'Mateus'
        }
    });
    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));
})();
