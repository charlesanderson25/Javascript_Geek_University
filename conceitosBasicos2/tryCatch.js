// Tratamento de erros com Try Catch

// Ao incluir o finally o programa sempre irá continuar

try {
  console.log(nomes);
} catch (error) {
  console.log("Não foi possível imprimir a variável nome");
} finally {
  console.log("Vamos continuar com o programa. . .");
}

console.log("-=".repeat(40));

try {
  console.log(somar(4, 2));
} catch (error) {
  console.log("Não foi possível executar a função", error.message);
} finally {
  console.log("Vamos continuar o código. . .");
}

console.log("-=".repeat(40));

const numeros = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(numeros);

console.log("-=".repeat(40));
