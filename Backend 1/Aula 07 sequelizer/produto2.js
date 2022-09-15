const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./sequelize.js');

const Produto = sequelize.define('produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},
{
    // freezeTabName: true,
    tableName: 'produto2',
    timestamps: true,
    createdAt: 'criado',
    updatedAt: 'alterado'
});

module.exports = Produto;