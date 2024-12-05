// Método iterar arrays que gera um novo array com o mesmo tamanho do original

let numeros = [1, 2, 3, 4, 5, 6];

function dobro(valor) {
  resultado = valor * 2;
  return resultado;
}

function soma1(valor1) {
  resultado = valor1 + 1;
  return resultado;
}

let valores2 = numeros.map(dobro);

console.log(typeof valores2);
console.log(Array.isArray(valores2)); // verifica se realmente é um array
console.log(valores2 instanceof Array); // verifica se realmente é um array

console.log(`O valor do índice 0 é ${valores2[0]}`);

console.log(`O novo array criado é: ${valores2}`);

let valores3 = numeros.map(soma1);
console.log(`O novo array criado é: ${valores3}`);
