const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápís", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qtdeMaiorQueZero = item => item.qtde > 0;
const getNome = item => item.nome;

console.log(carrinho.filter(qtdeMaiorQueZero));

const nomeItensValidosFilter = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome);

console.log(nomeItensValidosFilter);

