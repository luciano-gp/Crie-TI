let numero = prompt("De qual numero você quer saber a tábuada?");
let valida = new RegExp(/\d+/);

if (valida.test(numero)) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
} else {
    alert("Número Inválido");
    location.reload();
}