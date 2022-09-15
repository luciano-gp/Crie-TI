const {Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('./sequelize.js');

class Cliente extends Model {};

Cliente.init({
    nomeRazao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apelidoFantasia: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpfCnpj: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            customValidator(value) {
                
            }
        }
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