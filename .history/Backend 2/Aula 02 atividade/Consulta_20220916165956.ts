import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Consult extends Model {
  declare url: string;
};

Consult.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'consultas',
  modelName: 'Consulta',
  timestamps: false
});