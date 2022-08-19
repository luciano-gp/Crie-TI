var https = require('https');

https.get("https://parallelum.com.br/fipe/api/v2/cars/brands", function (response) {

    let data = '';

    response.on('data', function (buffer) {
        data += buffer;
    })

    response.on('end', function () {
        let marcas = JSON.parse(data);
        //FOR EACH NÃO PERMITE RETORNO
        // marcas.forEach(element => {
        //     marcasJuntas += `${element.name}, `;
        // });
        // console.log(marcasJuntas);

        //MAP PERMITE RETORNO
        let marcasJuntas =
            marcas.map(marca => {
                return marca.name;
            })
                .join(', ');
        console.log(marcasJuntas);
    });
});