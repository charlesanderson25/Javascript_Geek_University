// Funções com parâmetros variáveis e valor padrão

// Criar uma função sem parâmetros e durante sua execução pode passar quantos parâmetros desejar

// Mesmo que não sejam passados argumentos em uma função, o javaScript cria uma Array (arguments), que são os argumentos da função.

function somar() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma = soma + arguments[i];
  }
  return soma;
}

console.log(somar(1));
console.log(somar(2, 3));
console.log(somar(0));
console.log(somar(1, 99, 134, 90, 137));

let resultado = somar(999, 1);
console.log(`Impressão da variável resultado: ${resultado}`);

/////////////////////////////////////////////////////// Nova forma de declararo For //////////////////////////////////////////////////////////////

function imprimir_valores(n1, n2) {
  for (let i in arguments) {
    console.log(arguments[i]);
  }
}

console.log(imprimir_valores(1, 2));

console.log("-=".repeat(40));

function imprimir_valores1() {
  for (let i in arguments) {
    console.log(arguments[i]);
  }
}

imprimir_valores(2, 3);

/////////////////////////////////////////////////////// Parâmetro da função com valor padrão //////////////////////////////////////////////////////////////

console.log("-=".repeat(40));

function somar1(n1 = 0, n2 = 0, n3 = 0) {
  let soma = n1 + n2 + n3;
  console.log(soma);

  return soma;
}

somar1(1, 9, 10);
somar1(1, 9, 10, 1, 9);
somar1();
