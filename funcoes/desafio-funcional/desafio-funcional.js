function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y);
        }
    }
}

const operacao = calcular(4)(2)(dividir);

console.log(operacao);