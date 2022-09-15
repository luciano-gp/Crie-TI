const http = require('http');
const dbQuery = require('./dbquery.js');

const PORT = 3000;

const getMusicas = () => {
  return new Promise(async (resolve, reject) => {
    const dados = await dbQuery("SELECT musicas.id, musicas.nome, musicas.artista, musicas.album, generos.descricao AS genero FROM musicas, generos WHERE musicas.generos_id = generos.id");
    resolve(dados);
  });
}

const createServer = () => {
  http.createServer(async (request, response) => {

    const url = request.url;

    let status = 200;
    let data = await getMusicas();
    let content = 'application/json';
    let xml = '<musicas>';
    
    if (url === '/musicas') {
      data = JSON.stringify(data);
    } else if (url === '/musicasxml') {
      data.forEach((musica) => {
        xml += `
        <musica>
          <id>${musica.id}</id>
          <nome>${musica.nome}</nome>
          <artista>${musica.artista}</artista>
          <album>${musica.album}</album>
          <genero>${musica.genero}</genero>
        </musica>`
      });
      xml += '</musicas>'
      content = 'application/xhtml+xml';
      data = xml;
    } else {
      status = 404;
      data = { error: 'Página não encontrada!' };
    }

    response.writeHead(status, { 'Content-type': `${content}; charset=utf8` });
    response.write(data);
    response.end();

  }).listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
  });
}

createServer();
