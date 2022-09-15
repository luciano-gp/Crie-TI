const {Sequelize, Op} = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    const user = await User.findOne({
        where: {
            id: {
                [Op.eq]: 2
            }
        }
    });
    console.log(user.getFullName());
})();