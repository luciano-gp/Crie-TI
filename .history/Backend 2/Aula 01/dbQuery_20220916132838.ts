import { Sequelize, Op, QueryTypes } from 'sequelize';
import {db} from './sequelize';

export async function dbQuery(sql :any) {
    let resultado = await db.query(sql,{
        type: QueryTypes.SELECT,
    });

    return resultado;
}
