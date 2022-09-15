const { Sequelize, Op } = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    await User.destroy( {
        where: {
            firstName: 'Mat%'
        }
    });
    // const users = await User.findAll();
    // console.log(JSON.stringify(users, null, 2));
})();
