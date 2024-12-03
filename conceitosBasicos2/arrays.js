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

// parei no minuto 36 da aula
