const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class Feriado extends Model {
};

Feriado.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'feriados',
    tableName: 'feriados',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
});

module.exports = Feriado;