import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Log extends Model {
  declare recipient: string;
  declare sender: string;
  declare value: number;
};

Log.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  recipient: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'pix_logs',
  modelName: 'Log',
  createdAt: true,
  updatedAt: false,
});