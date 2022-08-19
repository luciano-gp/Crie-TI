let jogada = 0;
let acertos = 0;
let erros = 0;

const botoes = new Array(16);
botoes.push(document.querySelector('#btn01'));

console.log(botoes);

function viraFlag1() {
    
    var btn = document.querySelector('#btn01');
    btn.classList.remove('flag');
    btn.textContent = '1';
    jogadas++;
    valida();
}

function valida() {
    
}