function gritar() {
  alert("Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh!");
}

function dadosCadastrais() {
  let nome = " ";
  nome = prompt("Qual o seu nome?:");
  alert("Muito prazer em conhecê-lo, " + nome);
}

function mudarTexto() {
  let h1;
  h1 = document.getElementById("mainTitle");

  if (h1.innerText === "Javascript na Geek University!") {
    h1.innerText = "Javascript Completo na Geek University";
  } else if (h1.innerText === "Javascript Completo na Geek University") {
    h1.innerText = "Javascript na Geek University!";
  }
}
