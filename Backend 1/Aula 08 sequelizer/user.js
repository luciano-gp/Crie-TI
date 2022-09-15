const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class User extends Model {
    static alerta() {
        console.log('alerta');
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

User.init({
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
    sequelize,
    modelName: 'user',
    tableName: 'user',
    timestamps: true,
    createdAt: 'criacao',
    updatedAt: 'alteracao'
});
//`sequelize.define` also returns the model 
// console.log(User === sequelize.models.User);

module.exports = User;