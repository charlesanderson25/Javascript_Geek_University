// Operadores

// -------------------------------------------------------------------------------------------------------------------------------//

// Operadores Lógicos

let curso = "javaScript";
let legal = true;

// AND - Ambas expressões devem ser verdadeiras

if (curso === "javaScript" && legal === true) {
  console.log("O curso é de javaScript e também é legal!");
} else {
  console.log("O curso não é de javaScript ou não é legal");
}

// OR - Apenas uma das expressões deve ser verdadeira

if (curso === "javaScript" || legal === true) {
  console.log("O curso é de javaScript e também é legal!");
} else {
  console.log("O curso não é de javaScript ou não é legal");
}

// NOT - Quando queremos fazer uma negação ou verificar se algo não é como esperado

if (curso != "javaScript") {
  console.log("O curso não é de Javascript");
} else {
  console.log("O curso é de javaScript!");
}

// -------------------------------------------------------------------------------------------------------------------------------//

// Operadores Relacionais

/*

igual a ==
diferente de !=
maior que >
menor que <
maior ou igual a >=
menor ou igual a <=

igual e do mesmo tipo que ===
diferente e de outro tipo que !==

*/

// Operador Unário e Ternário

// Unário

let idade = 37;
idade++; // operação unária
console.log(idade);

// Ternário

let sexo = "m";

if (sexo === "m") {
  console.log("Masculino");
} else {
  console.log("Feminino");
}

console.log(sexo === "m" ? "Masculino" : "Feminino"); // operador ternário
