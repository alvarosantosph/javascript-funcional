/*
    Diz-se que uma linguagem de programação possui
    funções de primeira classe, quando as funções nessa
    linguagem são tratadas como qualquer outra variável
*/

const x = 3;
const y = function(txt) {
    return `Esse é o texto: ${txt}`;
}
const z = () => console.log('Zzzzzzz!');

console.log(x);
console.log(y('olá'));
z();