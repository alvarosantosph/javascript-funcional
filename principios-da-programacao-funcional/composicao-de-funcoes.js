function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    }
}

function gritar(texto) {
    return texto.toUpperCase();
}

function enfatizar(texto) {
  return `${texto}!!!`;
}

function tornarLento(texto) {
  return texto.split('').join(' ');
}

// const resultado = composicao(gritar, enfatizar, tornarLento)('para');
// console.log(resultado);

const exagerado = composicao(gritar, enfatizar, tornarLento);
const umPoucoexagerado = composicao(gritar, enfatizar);

const resultado = exagerado("para");
const resultado2 = umPoucoexagerado("cuidado com o buraco !!!");
console.log(resultado);
console.log(resultado2);


