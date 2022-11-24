/*
 Uma função pura é uma função em que o valor
 de retorno é determinado APENAS por seus valores
 de entrada, sem efeitos colaterais observáveis
*/

// Função Pura
function areaCircunferencia(raio, pi) {
    return raio * raio * pi;
}

console.log(10, Math.PI);

// Função impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 10000));
