const axios = require('axios');
axios.get('https://brasilapi.com.br/api/feriados/v1/2022').then((response) => console.log(response.data));