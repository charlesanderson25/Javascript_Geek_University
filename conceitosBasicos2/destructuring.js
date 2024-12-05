//Destructuring em Arrays

// Extraindo valores de arrays

const numeros = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100)
);
console.log(numeros);

// Extrai os 5 primeiros valores do array numeros

const [n1, n2, n3, n4, n5] = numeros;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);

// Extrai o primeiro e o terceiro elemento do array

const [num1, , num3] = numeros;
console.log(`O primeiro número do Array é: ${num1}`);
console.log(`O terceiro número do Array é: ${num3}`);
