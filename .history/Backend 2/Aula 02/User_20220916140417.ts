import {DataTypes, Model} from 'sequelize';
import {sequelize} from './sequelize';

export class User extends Model {};

User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize: sequelize,
    tableName: 'userTS',
    modelName: 'User'
  });