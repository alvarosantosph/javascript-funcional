const nums = [1, 2, 3, 4, 5];
const dobro = (valor, indice, array) => valor * 2 + indice + array.length;
//console.log(nums.map(dobro));

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápís", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const getTotal = (item) => item.qtde * item.preco;

console.log(carrinho.map(getNome));
console.log(carrinho.map(getTotal));
