const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class Contato extends Model {};

Contato.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    msg: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'contatos',
    tableName: 'contatos',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'alteracao'
});

module.exports = Contato;