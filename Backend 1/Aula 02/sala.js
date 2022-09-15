let sala = [];

let mesaP = {};
mesaP.descricao = "Mesa Pequena";

let mesaG = {};
mesaG.descricao = "Mesa Grande";

let parte1 = {};
parte1.mesas = preencheMesa(mesaP, 30);

let parte2 = {};
parte2.mesas = preencheMesa(mesaG, 6);

let parte3 = {};
parte3.mesas = preencheMesa(mesaP, 30);

sala.push(parte1);
sala.push(parte2);
sala.push(parte3);

console.log(sala);

function preencheMesa(mesa, quantidade) {
    let mesas = [];
    for (let i = 0; i < quantidade; i++) {
        mesas.push(mesa)
    }
    return mesas;
}