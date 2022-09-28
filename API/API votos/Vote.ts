import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Vote extends Model { };

Vote.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  candidate: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  party: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'votes',
  modelName: 'Vote'
});