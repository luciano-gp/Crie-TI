import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Consulta extends Model {
  declare url: string;
  declare valor: number;
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
  },
  valor: {
    type: DataTypes.NUMBER,
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'consultas',
  modelName: 'Consulta',
  timestamps: false
});