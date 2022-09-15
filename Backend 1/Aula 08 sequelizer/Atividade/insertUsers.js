const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class Users extends Model {
    static alerta() {
        console.log('alerta');
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

Users.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDate: {
        type: DataTypes.DATEONLY
    }
},
{
    sequelize,
    modelName: 'users',
    tableName: 'users',
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated'
});

module.exports = Users;