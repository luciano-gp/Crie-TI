import {DataTypes, Model} from 'sequelize';
import {sequelize} from './sequelize';

export class User extends Model {
    declare firstName: string;
    declare lastName: string;
    declare birthday: Date | null;

    getFullName() {
        return [this.firstName + ' ' + this.lastName].join(' ');
    }
}

User.init({
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
    tableName: 'userTS',
    modelName: 'User'
  });