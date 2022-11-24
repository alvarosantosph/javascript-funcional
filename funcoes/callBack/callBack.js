const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exbirConteudo(err, data) {
    console.log(data.toString());
}

fs.readFile(caminho, {}, exbirConteudo);