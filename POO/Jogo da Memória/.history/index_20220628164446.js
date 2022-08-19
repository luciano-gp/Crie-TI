let jogadas = 0;
let acertos = 0;
let erros = 0;

var botoes = new Array();
botoes.push(document.querySelector('#btn01'));
botoes.push(document.querySelector('#btn02'));
botoes.push(document.querySelector('#btn03'));
botoes.push(document.querySelector('#btn04'));
botoes.push(document.querySelector('#btn05'));
botoes.push(document.querySelector('#btn06'));
botoes.push(document.querySelector('#btn07'));
botoes.push(document.querySelector('#btn08'));
botoes.push(document.querySelector('#btn09'));
botoes.push(document.querySelector('#btn10'));
botoes.push(document.querySelector('#btn11'));
botoes.push(document.querySelector('#btn12'));
botoes.push(document.querySelector('#btn13'));
botoes.push(document.querySelector('#btn14'));
botoes.push(document.querySelector('#btn15'));
botoes.push(document.querySelector('#btn16'));

console.log(botoes);

function memoria() {
    if (jogadas == 2) {
        valida();
        jogadas = 0;
    } else {
        viraFlag1();
        jogadas++;
    }
}

function viraFlag1() {
    
    var btn = document.querySelector('#btn01');
    btn.classList.remove('flag');
    btn.textContent = '1';
    jogadas++;
}

function valida() {
    btn.textContent = '?';
}