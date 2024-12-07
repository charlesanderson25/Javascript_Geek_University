// Funções Anônimas ou Lâmbdas

////////////// Gerar array automático ///////////////////

function array() {
  const getArray = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 100)
  );
  console.log(getArray);
  return getArray;
}

const arrayGerado = array();

////////////// Função dobrar ///////////////////

function dobrar(n1, n2) {
  let resultado = n1 * n2;
  return resultado;
}
////////////// Array fixo ///////////////////

const arrayFixo = [2, 4, 6, 8, 10];

console.log("-=".repeat(40));

const dobraArray = arrayGerado.map(dobrar);
console.log(dobraArray);

console.log("-=".repeat(40));

////////////// Função Anônima ///////////////////

const iteraArrayFixo = arrayFixo.map(function (valor) {
  return valor * 2;
});

console.log(iteraArrayFixo);
