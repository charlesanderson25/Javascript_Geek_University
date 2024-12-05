// Método Reduce, reduz para um único valor um array iterado, através de uma função acumuladora

/////////////////////////////// Array /////////////////////////////////////////

let precos = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
console.log(`Array de preços: ${precos}`);

console.log("-=".repeat(40));

/////////////////////////////// Funções /////////////////////////////////////////

function maiorTrinta(valor) {
  resultado = valor > 30;
  return resultado;
}

function taxa(cinco) {
  resultado = cinco + 5;
  return resultado;
}

function soma(valor1, valor2) {
  resultado = valor1 + valor2;
  return resultado;
}

//////////////////////////// Métodos /////////////////////////////////////////

let maior30 = precos.filter(maiorTrinta);
console.log(`Novo array com valores maiores que 30: ${maior30}`);
console.log(maior30);

console.log("-=".repeat(40));

let taxado = maior30.map(taxa);
console.log(`Novo array com taxas aplicadas: ${taxado}`);

let total = taxado.reduce(soma);
console.log(`Os valores totais somados são de: ${total}`);
