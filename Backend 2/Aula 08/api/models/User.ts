import { DataTypes, Model } from 'sequelize';
import db from '../db';

export class User extends Model {
  declare id: number;
  declare name: string;
  declare age: number;
  declare sex: string;
  declare email: string;
  declare password: string;

  static async locateUser(email: string, password:string) {
    return await User.findOne({
      where: {
        email: email,
        password: password
      }
    });
  }
};

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
    allowNull: true
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'users',
  modelName: 'User'
});