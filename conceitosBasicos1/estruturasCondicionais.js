// Estruturas condicionais

const readline = require("readline"); // uso do readline para receber informações dos usuários através do Node.Js. Não é possível utilizar o prompt() no Node.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maioridade() {
  rl.question("Informe sua idade: ", (idade) => {
    console.log(`O tipo da variável idade é: ${typeof idade}`);
    let idadeNumerica = parseInt(idade);
    console.log(
      `O novo valor tipo de dado da variável idade é de ${typeof idadeNumerica}`
    );

    console.log(`Sua idade é de ${idade} anos`);
    rl.close();
  });
}
// maioridade();

// Usando o prompt-sync para substituição do prompt

const prompt = require("prompt-sync")();

function maioridade1() {
  let idade = prompt("Informe sua idade1: ");
  console.log(`O tipo de dado da variável ${idade} é: ${typeof idade}`);
  idadeNumerica = parseInt(idade);
  console.log(`O novo tipo da variável idade é de: ${typeof idadeNumerica}`);
}

// maioridade1();

// Praticando estrutura condicional simples

function maioridade3() {
  let idade3 = prompt("Informe sua idade:");
  idadeNumerica3 = parseInt(idade3);
  console.log(
    `Sua idade é de ${idadeNumerica3} e o tipo de dados da variável é de ${typeof idadeNumerica3}`
  );

  if (idadeNumerica3 <= 2) {
    console.log("Você é um bebê");
  } else if (idadeNumerica3 > 2 && idadeNumerica3 < 12) {
    console.log("Você é criança");
  } else if (idadeNumerica3 >= 12 && idadeNumerica3 < 18) {
    console.log("Você é adolescente");
  } else {
    console.log("Você é adulto");
  }
  process.exit(); // encerrar função automaticamente
}

// maioridade3();

// Uso do switch

let diaSemana = prompt("Informe um dia da semana: ");

switch (diaSemana) {
  case "segunda":
    console.log("Segunda-Feira");
    break;
  case "terca":
    console.log("Terça-Feira");
    break;
  case "quarta":
    console.log("Quarta-Feira");
    break;
  case "quinta":
    console.log("Quinta-Feira");
    break;
  case "sexta":
    console.log("Sexta-Feira");
    break;
  default:
    console.log("Não é dia da semana");
    break;
}
process.exit();
