const { DataTypes, Model } = require('sequelize');
const db = require('../db');
const City = require('./City');
const State = require('./State');
const Publisher = require('./Publisher');
const Categorie = require('./Categorie');
const Format = require('./Format');

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
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  sequelize: db,
  tableName: 'books',
  modelName: 'Book'
});
Categorie.hasMany(Book);
Publisher.hasMany(Book);
Format.hasMany(Book);

Book.belongsTo(Categorie);
Book.belongsTo(Publisher);
Book.belongsTo(Format);

module.exports = Book;
