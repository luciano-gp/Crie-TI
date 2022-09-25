import { DataTypes, Model } from 'sequelize';
import { sequelize } from './sequelize';

export class Consult extends Model { };

Consult.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  prazo_entrega: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  valor_sem_adicionais: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  valor_mao_propria: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  valor_aviso_recebimento: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  valor_valor_declarado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  entrega_domiciliar: {
    type: DataTypes.CHAR(1),
    allowNull: false
  },
  entrega_sabado: {
    type: DataTypes.CHAR(1),
    allowNull: false
  }
}, {
  sequelize: sequelize,
  tableName: 'consultas',
  modelName: 'Consulta',
  timestamps: false
});