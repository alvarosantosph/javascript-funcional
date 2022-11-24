// const letras = [
//     ['O', ['l'], 'á'], 
//     [' '], 
//     ['M',['u', 'n'], 'd', 'o'], 
//     ['!', '!', '!', '!']
// ];

// const resultado = letras
//     .map(l => l.toUpperCase())
//     .reduce((a, b) => a + b);

// console.log(resultado);

// console.log(letras.flat().flat());
// console.log(letras.flat(2));
// console.log(letras.flat(Infinity)); // Independente da infinidade de aninhamento

const letrasAninhadas = [
    ['O', ['l'], 'á'], 
    [' '], 
    ['M',['u', 'n'], 'd', 'o'], 
    ['!', '!', '!', '!']
];

const letras = letrasAninhadas.flat(Infinity);
console.log(letras);