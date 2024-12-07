// Arrow Functions
// Forma simplificada e reduzida de declarar funções

let somar = (n1, n2) => {
  resultado = n1 + n2;
  console.log(resultado);

  return resultado;
};

somar(1, 2);

// Quando a Arroy function possui apenas um único parâmetro e executa apenas uma linha, é possível simplificar sua declaração

let dobrar = (valor) => valor * 2;

console.log(`O dobro do número informado é: ${dobrar(5)}`);

// Declaração tradicional de função x Arroy function

function mensagem() {
  console.log("Isso é uma mensagem!");
}

mensagem();

const msg = () => console.log("Isso é uma mensagem!");

msg();
