const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const Produto = require('./produto2.js');

(async () => {
    await Produto.sync({ force: true });

    for (let i = 0; i < 10; i++) {
        const produto = await Produto.build({
            nome: `Bola${i + 1}`,
            valor: 50.00
        })
        await produto.save();
    };
})();