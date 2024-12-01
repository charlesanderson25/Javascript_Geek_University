function mensagem_curso() {
  let valor = console.log(0);
  console.log(valor); // variável valor recebe undefined, porque não é possível utilizar o console.log para guardar valores em variáveis

  if (valor == 0) {
    console.log("Geek University");
  } else {
    console.log("O valor não era zero!");
  }
}

mensagem_curso();
