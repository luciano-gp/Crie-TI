const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('./sequelize.js');

const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        //allowNull defaults to true
    }
},
{
    // freezeTabName: true,
    tableName: 'user',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'alteracao'
});
//`sequelize.define` also returns the model 
// console.log(User === sequelize.models.User);

module.exports = User;