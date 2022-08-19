let jogada = 0;
let acertos = 0;
let erros = 0;
let x = 1;

function viraFlag${x}() {
    var btn = document.querySelector('#btn${x}');
    btn.classList.remove('flag');
    btn.textContent = '1';
    x++;
}