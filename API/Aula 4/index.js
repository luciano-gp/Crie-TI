const ligarParaSuporte = (callback) => {
    console.log('Ligando para o suporte técnico');
    console.log('Alguém atendeu!');
    console.log('Explicar o problema');
    console.log('Técnico tenta resolver o problema');
    console.log('Abrir chamado para visita técnica');

    setTimeout(() => {
        callback();
    }, random(1000, 3000));
}

const visitaTecnica = () => {
    console.log('Visita técnica');
    console.log('Problema resolvido');
    console.log('TV voltou a funcionar!');
}

const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

ligarParaSuporte(() => visitaTecnica());
console.log('Continuar vivendo...');