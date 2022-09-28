axios.get('https://brasilapi.com.br/api/feriados/v1/2022')
    .then((result) => {
        let feriados = [];
        let months = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        result.data.forEach((day) => {
            let month = day.date.split('-')
            feriados.push(month[1]);
        });
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < feriados.length; j++) {
                if (feriados[j] == i+1) {
                    months[i] += 1;
                }
            }
        };
        createGraphic(months);
    });

function createGraphic(months) {
    Highcharts.chart('container', {
        title: {
            text: 'Feriados'
        },
        xAxis: {
            title: {
                text: 'Meses'
            },
            categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        },
        yAxis: {
            title: {
                text: 'Quantidade de feriados'
            }
        },
        series: [{
            type: 'line',
            name: 'valores',
            data: months
        }]
    });
}