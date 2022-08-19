let sala = [];

let mesaP = {};
mesaP.descricao = "Mesa Pequena";

let mesaG = {};
mesaG.descricao = "Mesa Grande";

function preencheMesa(mesa, quantidade) {
    let mesas = [];
    for (let i = 0; i < quantidade; i++) {
        mesas.push(mesa)
    }
    return mesas;
}

let parte1 = {};
parte1.preencheMesa(mesaP, 30);

let parte2 = {};
parte2.mesas = [];
for (let i = 0; i < 6; i++) {
    parte2.mesas.push(mesaG)
};

let parte3 = {};
parte3.mesas = [];
for (let i = 0; i < 30; i++) {
    parte3.mesas.push(mesaP)
};

sala.push(parte1);
sala.push(parte2);
sala.push(parte3);

console.log(sala);
