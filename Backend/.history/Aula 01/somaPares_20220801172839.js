let numero = prompt("Digite um número <= 100");
const condicao = (numero > 100) || (numero < 0);

if (condicao) {
    alert("Digite somente números entre 0 e 100");
    location.reload();
} else {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i <= numero; i++) {
        if (numero % i == 0) {
            pares += i;
        } else {
            impares += i;
        }
    }
}

console.log("Soma dos pares: " + pares);
console.log("Soma dos impares: " + impares);
