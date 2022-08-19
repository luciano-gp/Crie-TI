let numero = prompt("Digite um número <= 100");
let pares = 0;
let impares = 0;
let valida = new RegExp(/^\d+/);
const condicao = (((numero > 100) && (numero < 0)) || (valida.test(numero)));
console.log(condicao);

if ((!condicao) && (!valida.test(numero))) {
    alert("Digite somente números entre 0 e 100");
    location.reload();
} else {
    for (let i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            pares += i;
        } else {
            impares += i;
        }
    }
    console.log("Soma dos pares: " + pares);
    console.log("Soma dos impares: " + impares);
}

