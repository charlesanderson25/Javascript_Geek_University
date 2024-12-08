// Funções Closures

let variavel = "Global"; // pode ser acessada globalmente no programa

function imprimir() {
  console.log(variavel);
}

imprimir();

function outra() {
  let variavel = "Local"; // pode ser acessada localmente dentro do bloco / contexto
  imprimir();
}

outra();
