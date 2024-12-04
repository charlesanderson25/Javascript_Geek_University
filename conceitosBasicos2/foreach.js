// Método foreach - Método moderno para substituir o For

let linguagens = ["Javascript", "Java", "Python", "C#", "C++", "C", "PHP"];

function imprimir(linguagens, indice) {
  console.log(`${indice} - ${linguagens}`);
}

linguagens.forEach(imprimir);

console.log("-=".repeat(40));

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach(function (numero) {
  console.log(`Número - ${numero}`);
});

console.log("-=".repeat(40));

let numeros1 = [1, 2, 3, 4, 5];

soma = 0;

numeros1.forEach(function (num) {
  soma = soma + num;
});

console.log(`A soma entre os elementos do array informado tem valor: ${soma}`);

console.log("-=".repeat(40));

// Alterando um objeto

let alunos = [
  { aluno: "Charles", idade: 37 },
  { aluno: "Gécica", idade: 33 },
  { aluno: "Jade", idade: 3 },
];

alunos.forEach(function (aluno) {
  aluno.idade = aluno.idade + 1;
});

console.log(alunos);
