import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/sequelize';

export class Usuario extends Model {

  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;

  static async localizaUsuario(email: string, senha: string) {
    return await Usuario.findOne({
      where: {
        email: email,
        senha: senha
      }
    });
  }
}

Usuario.init(
{
  nome: {
    type: DataTypes.STRING
  },
  senha: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, 
{
  sequelize,
  modelName: 'Usuario',
  freezeTableName: true,
  tableName: 'usuario',
  timestamps: true,
  createdAt: 'criacao',
  updatedAt: 'alteracao'
});