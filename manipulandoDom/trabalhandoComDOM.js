// Trabalhanbdo com a DOM

const spans = document.getElementsByTagName("span");

console.log(spans[0].textContent);
console.log(spans[1].innerHTML);

//*************************** Captura btn *******************************

let button = document.querySelector("#btn");
let campoInput = document.querySelector("#campoTexto");

button.addEventListener("click", () => {
  alert(campoInput.value);
  console.log(campoInput.value);

  campoInput.value = "";
});
