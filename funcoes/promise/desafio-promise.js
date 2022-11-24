const fs = require("fs");
const path = require("path");

function lerArquivoPromise(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, {}, (_, conteudo) => {
            resolve(conteudo.toString());
        });
    });
}

const caminho = path.join(__dirname, "dados.txt");

lerArquivoPromise(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log);
