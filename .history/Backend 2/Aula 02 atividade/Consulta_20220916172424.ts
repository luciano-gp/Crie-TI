import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Consulta extends Model {
  declare url: string;
  declare valor: number;
};

Consulta.init({
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
    type: DataTypes.DECIMAL,
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'consultas',
  modelName: 'Consulta',
  timestamps: false
});