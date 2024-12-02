// Trabalhando com Intervalos e Timeout

function mensagem() {
  console.log("Geek University - Javascript");
}

// setInterval(mensagem, 1000); Loop infinito a cada 1 segundo
setTimeout(mensagem, 1000); // executa a função após 1 segundos

let count = 0;

while (count < 5) {
  setTimeout(() => {
    console.log("Geek University");
  }, count * 1000);
  count++;
}
