const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápís", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
const getTotal = (item) => item.qtde * item.preco;

Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this);
    novoArray.push(resultado);
  }
  return novoArray;
};

console.log(carrinho.meuMap(getNome));
console.log(carrinho.meuMap(getTotal));
