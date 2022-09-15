const { Sequelize, Op } = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    const users = await User.findAll({
        where: {
            // id: {
            //     [Op.in]: [1, 2, 7]
            // }
            firstName: {
                [Op.iLike]: "iuri"
            }
        }
    });
    await users.forEach((user) => {
        user.update({
            firstName: 'Yuri'
        });
        user.save();
    });
    console.log(JSON.stringify(await User.findAll(), null, 2));
})();
