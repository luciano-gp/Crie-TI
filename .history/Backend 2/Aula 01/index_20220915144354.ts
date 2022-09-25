// let nome : string = 'Luciano';
// let idade : number = 23;
// // idade = 'Vinte e três';

// let criacao : Date = new Date();
// let situacao : boolean = false;

// let vetor : string[] = ['Luciano', 'Gomes', 'Pereira', 'Júnior'];

// vetor.forEach((nome : string) => console.log(nome));

// console.log(`Meu nome é ${nome}, e eu tenho ${idade} anos`);
// console.log(`Criação: ${criacao.toLocaleString()}`);
// console.log(`Situação: ${situacao}`);

// let obj : any = {x: 0};
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'Hello';
// console.log(obj);
// const n : number = obj;
// console.log(n);

// let user = {
//     nome: 'Luciano',
//     idade: 23
// }

// // user.location = 'Lajeado';

// console.log(user);

// function caraOuCoroa() {
//     return Math.random() > 0.5 ? 1 : 0;
// }

// let result = caraOuCoroa();

// console.log(result);

// function alo (nome: string) {
//     console.log('Alô, ' + nome);
// }

// alo('Luciano');

// function obtemNumero() : number {
//     return 15;
// }

// console.log(obtemNumero());

function montaNome(nome: string, sobrenome: string, nomeMeio?: string) {
    console.log(nome, sobrenome, nomeMeio?.toUpperCase());
}

montaNome('Luciano', 'Júnior');