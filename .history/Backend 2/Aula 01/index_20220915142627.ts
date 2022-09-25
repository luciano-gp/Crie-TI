let nome : string = 'Luciano';
let idade : number = 23;
// idade = 'Vinte e três';

let criacao : Date = new Date();
let situacao : boolean = false;

let vetor : string[] = ['Luciano', 'Gomes', 'Pereira', 'Júnior'];

vetor.forEach((nome : string) => console.log(nome));

console.log(`Meu nome é ${nome}, e eu tenho ${idade} anos`);
console.log(`Criação: ${criacao.toLocaleString()}`);
console.log(`Situação: ${situacao}`);

let obj : any = {x: 0};
// obj.foo();
// obj();
// obj.bar = 100;
// obj = 'Hello';
// console.log(obj);
// const n : number = obj;
// console.log(n);