ativarCaixas();

function ativarCaixas() {
    const caixas = document.querySelectorAll('.botao');
    for (let i = 0; i < caixas.length; i++) {
        const caixa = caixas[i];
        caixa.addEventListener('mouseover', entrarCaixa);
        caixa.addEventListener('mouseout', sairCaixa);
        caixa.addEventListener('click', clicarCaixa);
        caixa.addEventListener('dblclick', removerCaixa);

    }
}

function entrarCaixa() {
    this.classList.remove('onclick')
    this.classList.toggle('onmouseover');
}

function sairCaixa() {
    this.classList.remove('onclick')
    this.classList.remove('onmouseover');
}

function clicarCaixa() {
    this.classList.toggle('onclick');
}

function addCaixa() {
    const novaCaixa = document.createElement("div");
    novaCaixa.classList.add('caixa');
    document.body.appendChild(novaCaixa);
    ativarCaixas();
}

function removerCaixa() {
    document.body.removeChild(this);
}