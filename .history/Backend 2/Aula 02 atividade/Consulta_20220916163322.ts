import {DataTypes, Model} from 'sequelize';
import {sequelize} from './sequelize';

export class Consult extends Model {
    declare firstName: string;
    declare lastName: string;
    declare birthday: Date | null;
}

Consult.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'consults',
    modelName: 'Consult'
  });