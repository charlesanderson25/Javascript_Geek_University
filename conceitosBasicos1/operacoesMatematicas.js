// Operações Matemáticas

const { log } = require("console");

const prompt = require("prompt-sync")();

function operacoesMatematicas() {
  let num1 = prompt("Informe um número qualquer: ");
  let num2 = prompt("Informe um número decimal: ");

  console.log("-=".repeat(35));

  console.log(
    `O primeiro número informado é ${num1} e seu tipo de dado é ${typeof num1}`
  );

  console.log("-=".repeat(35));

  console.log(
    `O segundo número informado é ${num2} e o seu tipo de dado é ${typeof num2}`
  );

  num1Numerico = parseInt(num1);
  num2Float = parseFloat(num2);

  // Operações

  soma = num1Numerico + num2Float;
  subtracao = num1Numerico - num2Float;
  multiplicacao = num1Numerico * num2Float;
  divisao = num1Numerico / num2Float;
  restoDivisao = num1Numerico % 2;

  console.log("-=".repeat(35));

  console.log(`O resultado da soma entre os números informados é de: ${soma}`);
  console.log("-=".repeat(35));
  console.log(
    `O resultado da subtração entre os números informados é de: ${subtracao}`
  );
  console.log("-=".repeat(35));
  console.log(
    `O resultado da multiplicação entre os números informados é de: ${multiplicacao}`
  );
  console.log("-=".repeat(35));
  console.log(
    `O resultado da divisão entre os números informados é de: ${divisao.toFixed(
      2
    )}`
  );
  console.log("-=".repeat(35));
  console.log(
    `O resto da divisão entre os números informados é de: ${restoDivisao}`
  );
  console.log("-=".repeat(35));

  // verifica se o número é par através do resto da divisão

  if (restoDivisao === 0) {
    console.log(`O número ${num1Numerico} é par`);
  } else {
    console.log(`O número ${num1Numerico} é ímpar`);
  }

  // incremento

  num1Numerico = num1Numerico + 1; // pode ser escrito como num1Numerico += 1

  console.log(`O incremento do número ${num1} informado é ${num1Numerico}`);
  console.log(`Imprime a variável e depois incrementa ${num1Numerico++}`); // Imprime a variável e depois incrementa
  console.log(`Imprime a variável e depois decrementa ${num1Numerico--}`); // Imprime a variável e depois decrementa
  console.log(`Incrementa e depois imprime a variável ${++num1Numerico}`); // Incrementa e depois imprime a variável
  console.log(`Decrementa e depois imprime a variável ${--num1Numerico}`); // Decrementa e depois imprime a variável

  process.exit();
}

operacoesMatematicas();
