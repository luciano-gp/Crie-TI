const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const User = require('./user.js');

(async () => {
    await User.sync({force: true});
    //await User.drop();

    const user = await User.build({
        firstName: 'John',
        lastName: 'Doe'
    });

    console.log(`Is ${user.firstName} a user = (user instanceof User)`);
    await user.save();

    // user.firstName = 'Laew';
    // await user.save();

    // await user.update({firstName: 'testName'});

    // user.destroy();
})();