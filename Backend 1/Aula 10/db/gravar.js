const Sequelize = require('sequelize');
const sequelize = require('./sequelize.js');
const Contato = require('./contato.js');

const gravar = async(formulario) => {
    await Contato.sync();

    const contato = await Contato.build({
        nome: formulario.nome,
        email: formulario.email,
        msg: formulario.msg
    });

    await contato.save();
};

module.exports = gravar;