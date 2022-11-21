import { DataTypes, Model } from 'sequelize';
import { State } from './State';
import db from '../db';

export class City extends Model {
  declare id: number;
  declare name: string;
};

City.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'cities',
  modelName: 'City'
});

State.hasMany(City);
City.belongsTo(State);