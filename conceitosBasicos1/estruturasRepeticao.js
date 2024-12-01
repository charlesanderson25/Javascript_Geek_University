// Estruturas de Repetição

const prompt = require("prompt-sync")();

// for

for (n = 0; n <= 10; n++) {
  console.log(`A lista de números é: ${n}`);
}

// while

let n2 = prompt("Informe um n2: ");

while (n2 < 10) {
  console.log(`A segunda lista de números é: ${n2}`);
  n2++;
}

// do while

let count = 0;

do {
  console.log(`Imprime o valor de count ${count}`);
  count++;
} while (count <= 5);
