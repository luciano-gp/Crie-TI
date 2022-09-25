import {db} from './database';
import {dbQuery} from './dbQuery';

db.connect();

async function main() {
    let resultado : any = await dbQuery('SELECT * FROM produto', );
    console.table(resultado);

    // let id = 1;
    // let sql = 'SELECT * FROM produto WHERE id = $1;';
    // let resultado2 = await dbQuery(sql, [id]);
    // console.table(resultado2);

    db.end();
}
main();