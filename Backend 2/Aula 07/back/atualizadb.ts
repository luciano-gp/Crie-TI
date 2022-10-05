import Usuario from "./model/Usuario";

async function atualizaDb() {
    console.log(Usuario);
    await Usuario.sync({force:true});
    await Usuario.create({nome:"Luciano", senha:"12345",email:"luciano@teste.com"})

    let logado:any = await Usuario.localizaUsuario('luciano@teste.com','12345');
    console.log(logado.toJSON());
}

atualizaDb();