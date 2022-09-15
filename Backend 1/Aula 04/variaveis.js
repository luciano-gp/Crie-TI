console.log(".: Variaveis :.");
const multiplicador = 2;
var total = 0;
for (var i = 0; i <= 10; i++) {
    total += i * multiplicador;
    var minhaSoma = total;
}
console.log(`Total: ${minhaSoma}`);
console.log('VAR - escopo global');
console.log('LET - variavel "privada');
console.log('CONST - variavel que não muda');