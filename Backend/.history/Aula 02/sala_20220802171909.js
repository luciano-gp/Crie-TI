let sala = [];
let mesa = {};

let parte1 = {};
parte1.mesas = [];
for (let i = 0; i < 30; i++) {
    parte1.mesas.push(mesa)
};

let parte2 = {};
parte1.mesas = [];
for (let i = 0; i < 6; i++) {
    parte1.mesas.push(mesa)
};

let parte3 = {};
parte1.mesas = [];
for (let i = 0; i < 30; i++) {
    parte1.mesas.push(mesa)
};

sala.push(parte1);
sala.push(parte2);
sala.push(parte3);

console.log(sala);