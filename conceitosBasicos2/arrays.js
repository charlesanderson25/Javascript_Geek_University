// Introdução à Arrays

let nomes = ["Charles", "Gécica", "Jade"];
console.log(`O valor do índice 0 do array é: ${nomes[0]}`);
console.log(`O valor do índice 1 do array é: ${nomes[1]}`);
console.log(`O valor do índice 2 do array é: ${nomes[2]}`);

nomes[3] = "Vovó Rita"; // adiciona um item ao Array

console.log(nomes);

nomes[5] = "Vovó Maria";

console.log(nomes);

console.log(`O nome no índice 4 é: ${nomes[4]}`);

if (nomes[4] == undefined) {
  nomes[4] = "Vovô Paulo";
}

console.log(`O novo array de nomes é ${nomes}`);

// Inserindo elementos no final do Array

nomes.push("Vovô Valmir");

console.log(`O novo array de nomes é: ${nomes}`);

// Tamanho do array

console.log(nomes.length);

// Ordenar dados do array

nomes.sort(); // método apenas para strings

console.log(`O array ordenado é: ${nomes}`);

// Ordenação array de inteiros / float

let intFloats = [94, 537, 25.4, 2, 93, 257];

intFloats.sort((a, b) => a - b); // ordenação utilizando arrow function

console.log("-=".repeat(35));

console.log(`Resultado do array de números ordenados ${intFloats}`);

let intFloats1 = [94, 537, 25.4, 2, 93, 257, 999];

intFloats1.sort(function (a, b) {
  return a - b;
}); // utilizando função regular

console.log("-=".repeat(35));

console.log(
  `Array de números ordenado, utilizando função regular ${intFloats1}`
);

// Excluir um elemento do array

console.log("-=".repeat(35));

delete intFloats1[0]; // exclui elemento sem alterar o tamanho do array

console.log(`Array após exclusão do índice zero ${intFloats1}`);

console.log(`Índice zero após exclusão com delete ${intFloats1[0]}`);

// Excluir um elemento do array alterando seu tamanho

console.log("-=".repeat(35));

intFloats1.splice(0, 1); // método com dois parâmetros, splice(índice_do_array, quantidade_de_itens_excluídos)

console.log(
  `Exclusão do índice zero utilizando método splice, o elemento de índice [1] vai para o índice [0] ${intFloats1[0]}`
);

console.log(`Novo array após exclusão com splice ${intFloats1}`);

// Adicionando elemento no array na última posição

intFloats1.push(666);

console.log(`Novo array com elemento adicionado ${intFloats1}`);

// adicionando elemento no array utilizando o splice()

intFloats1.splice(0, 0, 777);

console.log(
  `A partir da posição zero, não exclua elementos e adicione o número 777: ${intFloats1}`
);

// Iterar arrays

for (let i = 0; i <= intFloats1.length; i++) {
  console.log(`Resultado da iteração do array: ${intFloats1[i]}`);
}

// removendo último elemento de um array

intFloats1.pop();

console.log(
  `Array após uso do método pop(), undefined era o último elemento ${intFloats1}`
);

// método slice, retorna um novo array a partir do índice informado como parâmetro

let intFloats2 = intFloats1.slice(1);
console.log(`Novo array a partir do índice [1] ${intFloats2}`);

// método concat

let x = ["x", "xx", "xxx"];
let y = ["y", "yy", "yyy"];

let xy = x.concat(y);
console.log(xy);

// ordenar

xy.sort(function (a, b) {
  return a - b;
});
console.log(xy);

// Array de array´s ou matrizes com colunas e linhas

let tabuleiro = [
  [1, 2, 3, 4], // linha 0
  [5, 6, 7, 8], // linha 1
  [10, 11, 12, 13], // linha 2
  [14, 15, 16, 17], // linha 3
];

console.log(tabuleiro[3][2]); // impressão do número 16, onde o primeiro índice refere-se à linha e o segundo índice refere-se à coluna
console.log(tabuleiro[0][3]); // impressão do número 4
