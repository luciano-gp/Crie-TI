const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const City = require('./City');
const State = require('./State');

class Publisher extends Model { };

Publisher.init({
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
  tableName: 'publishers',
  modelName: 'Publisher'
});
City.hasMany(Publisher);
Publisher.belongsTo(City);
State.hasMany(City);
City.belongsTo(State);

module.exports = Publisher;
