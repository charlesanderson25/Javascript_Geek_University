// Método Filter, utilizado para filtrar um array, sempre gerando um novo array

// Cria array com números aleatórios com 30 elementos

let numerosAleatorios = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(numerosAleatorios);

//Função números pares

function numPares(valor) {
  resultado = valor % 2 === 0;
  return resultado;
}

//Função números ímpares

function numImpares(valor) {
  resultado = valor % 2 !== 0;
  return resultado;
}

//Resultado pares

let apenasPares = numerosAleatorios.filter(numPares);
console.log(`Os números pares do Array criado são: ${apenasPares}`);
console.log(Array.isArray());

console.log("-=".repeat(50));

//Resultado ímpares

let apenasImpares = numerosAleatorios.filter(numImpares);
console.log(`Os números ímpares do Array criado são: ${apenasImpares}`);
