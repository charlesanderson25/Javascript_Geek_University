// Funções Callbacks

const linguagens = [
  "JavaScript",
  "Java",
  "Python",
  "PHP",
  "C",
  "C++",
  "C#",
  "SQL",
  "SAS",
  "R",
  "Scala",
];

function imprimirCursos(curso, indice) {
  console.log(`${indice + 1} - ${curso}`);
}

linguagens.forEach(imprimirCursos); // Aqui está ocorrendo o callback
linguagens.map(imprimirCursos); // Aqui está ocorrendo o callback

/////////////////////////////// Arrays /////////////////////////////////////

const maiores = [51, 69, 23.4, 5, 114.9, 24, 119, 2.5];

const menores = [];

for (let i = 0; i < maiores.length; i++) {
  if (maiores[i] < 50) {
    menores.push(maiores[i]);
  }
}

console.log(typeof menores);

console.log(`Os valores menores que 50 são: ${menores}`);

console.log("-=".repeat(40));

// Utilizando o Filter

function menores1(valor) {
  if (valor < 50);
  return valor < 50;
}

const usofilter = maiores.filter(menores1);

console.log(usofilter);
