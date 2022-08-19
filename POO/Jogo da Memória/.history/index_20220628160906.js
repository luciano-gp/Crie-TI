let jogada = 0;
let acertos = 0;
let erros = 0;

function viraFlag() {
    var btn = document.querySelector('.flag');
    btn.classList.remove('flag');
    btn.textContent = '1';
}