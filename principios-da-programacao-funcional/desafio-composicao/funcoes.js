const fs = require('fs');
const path = require("path");

function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
        if (Promise.resolve(acc) === acc) {
            return fn(await acc);
        } else {
            return fn(acc);
        }
      
    }, valor);
  };
}


function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const arquivos = fs.readdirSync(caminho);
            const arquivosCompletos = arquivos.map(arquivo => {
                return path.join(caminho, arquivo)
            });
            resolve(arquivosCompletos);
        } catch(e) {
            reject(e);
        }
    });
}

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, {encoding: 'utf-8'});
            resolve(conteudo);
        } catch(e) {
            reject(e);
        }
    });
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function removerElementosSeVazio(array) {
    return array.filter(elemento => elemento.trim());
}

function removerElementosSeIncluir(padraoTextual) {
    return function(array) {
        return array.filter((elemento) => !elemento.includes(padraoTextual));
    }
}

function removerElementosSeApenasNumero(array) {
  return array.filter((elemento) => {
    const numero = parseInt(elemento.trim());
    return numero !== numero;
  });
}

function removerSimbolos(simbolos) {
    return function(array) {

        // return array.map(elemento => {
        //     let textoSemSimbolos = elemento;
        //     simbolos.forEach(simbolo => {
        //         textoSemSimbolos = textoSemSimbolos.split(simbolo).join('');
        //     });
        //     return textoSemSimbolos;
        // });

        return array.map((elemento) => {
            return simbolos.reduce((acc, simbolo) => {
                return acc.split(simbolo).join('')
            }, elemento);
        });
    }
}

function elementosTerminadosCom(padraoTextual) {
    return function(array) {
        return array.filter((elemento) => elemento.endsWith(padraoTextual));
    }
}

function mesclarConteudos(array) {
    return array.join(" ");
}

function separarTextoPor(simbolo) {
    return function(texto) {
        return texto.split(simbolo);
    }
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {})
  );
}

function ordenarPorAtributoNumerico(attr, ordem='asc') {
    return function(array) {
        const asc = (o1, o2) => o1[attr] - o2[attr];
        const desc = (o1, o2) => o2[attr] - o1[attr];
        return array.sort(ordem === 'asc' ? asc : desc);
    }
}  

module.exports = {
  composicao,
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  elementosTerminadosCom,
  mesclarConteudos,
  separarTextoPor,
  agruparElementos,
  ordenarPorAtributoNumerico
};