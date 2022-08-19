const funcaoUm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminou a função 1');
            resolve();
        }, 2000);
    });
}

const funcaoDois = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminou a função 2');
            resolve();
        }, 1000);
    });
}

const funcaoTres = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Terminou a função 3');
            resolve();
        }, 500);
    });
}

funcaoUm()
    .then(funcaoDois)
    .then(funcaoTres)
    .catch((error) => console.log(error));