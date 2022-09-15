const Sequelize = require('sequelize');
const sequelize = require('../Aula 07 sequelizer/sequelize.js');
const User = require('./user.js');

(async () => {
    User.alerta();

    await User.sync({force: true});

    const user = await User.build({
        firstName: 'John',
        lastName: 'Doe'
    });

    console.log('Fullname: ' + user.getFullName());

    await user.save();
})();