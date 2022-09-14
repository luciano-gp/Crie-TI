const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const Categorie = require('./Category');
const City = require('./City');
const Format = require('./Format');
const Publisher = require('./Publisher');
const State = require('./State');

class Book extends Model { };

Book.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  publication_year: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  pages: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'books',
  modelName: 'Book'
});

Categorie.hasMany(Book);
Book.belongsTo(Categorie);

City.hasMany(Publisher);
Publisher.belongsTo(City);

Format.hasMany(Book);
Book.belongsTo(Format);

Publisher.hasMany(Book);
Book.belongsTo(Publisher);

State.hasMany(City);
City.belongsTo(State);

module.exports = Book;