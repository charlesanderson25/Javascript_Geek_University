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
