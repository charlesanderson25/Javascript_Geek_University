// Javascript tem tipagem dinâmica, a variável pode ter conteúdo com tipagens diferentes a cada atribuição.

let nome1 = "Geek University"; //aspas duplas
let nome2 = "Geek University"; // aspas simples

nome1 = "Geek";
nome2 = 25;

console.log(nome1 + nome2);
console.log(nome1, nome2);

// Principais tipos de dados:

let nome = "Charles"; //string
let idade = 37; //int
let altura = 1.8; //float
let ativo = true; //boolean
let familia = ["Charles", "Gecica", "Jade"]; //array - vetor unidimensional
let cadastro = {
  nome: "Charles",
  idade: 37,
  altura: 1.8,
  ativo: true,
}; //objeto

console.log(
  `O meu nome é ${nome}, minha idade é de ${idade} anos, minha altura é de ${altura}`
);

console.log(
  `Exempo de template strings com objetos: Olá, meu nome é ${cadastro.nome}, tenho ${cadastro.idade} anos e ${cadastro.altura} metros de altura.`
);
