// Função Fábrica

// Função que retorna um objeto ao ser executada

function curso(n, p) {
  let desconto = 0.9;
  return {
    nome: n,
    preco: (p * desconto).toFixed(2),
  };
}

console.log(curso("Javascript Completo", 27.99));
