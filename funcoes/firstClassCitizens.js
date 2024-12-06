// Funções

function array() {
  const arrayGerado = Array.from({ length: 20 }, () =>
    Math.floor(Math.random() * 100)
  );
  return arrayGerado;
}

function somar(n1, n2) {
  resultado = n1 + n2;
  console.log(resultado);

  if (n2 === 0) {
    console.log("Não é possível dividir por zero");
  }

  return resultado;
}

try {
  somar(999, 1);
} catch (error) {
  console.log("Não foi possível executar a função SOMAR: ", error.message);
} finally {
  console.log("Continuar o código...");
}

console.log("-=".repeat(40));

// Função como qualquer tipo de dado

const executar = somar;
console.log(`Constante executar: ${executar(8, 2)}`);

console.log("-=".repeat(40));

// Função como qualquer tipo de dado

function fazAlgo(num1, num2, funcao) {
  resultado = funcao(num1, num2);
  return resultado;
}

console.log(`Função faz algo: ${fazAlgo(10, 5, somar)}`);

console.log("-=".repeat(40));

// Função como qualquer tipo de dado

function outra(funcao) {
  return funcao;
}

console.log(`Função outra: ${somar(99, 1)}`);

console.log("-=".repeat(40));

try {
  console.log(`Executando a função array: ${array()}`);
} catch (error) {
  console.log("Não foi possível executar a função array: ", error.message);
} finally {
  console.log("Vamos continuar o programa. . .");
}

// Função como qualquer tipo de dado

console.log("-=".repeat(40));

let valores1 = [1, 2, 3, "Charles", true, somar];

for (let i = 0; i < valores1.length; i++) {
  console.log(
    `Tipos de dados de cada elemento do array valores1: ${typeof valores1[i]}`
  );
}
