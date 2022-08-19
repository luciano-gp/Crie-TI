const define = () => {
    console.log('Buscando...');
    return new Promise((resolve, reject) => {
        resolve({
            nome: 'Luciano',
            sobrenome: 'Gomes',
            idade: 23
        });
    });
}

const mostra = (object) => {
    return new Promise((resolve, reject) => {
        console.log(`Nome: ${object.nome} ${object.sobrenome}\nIdade: ${object.idade} anos`);
        resolve();
    });
}

define()
    .then(mostra)
    .catch('Não encontrado');