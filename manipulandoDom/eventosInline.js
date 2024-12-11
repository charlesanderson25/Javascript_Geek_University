let getBtn = document.getElementById("btn");

getBtn.addEventListener("click", () => {
  console.log("Fui clicado!");
  alert("Fui clicado!");
});

let alteraTitulo = document.querySelector(".titulo");

alteraTitulo.innerText = "Novo título!";
alteraTitulo.innerHTML = "<h2> Novo Título 2! </h2>";

///////////////////////////// OnMouseOver ////////////////////////////////////

const titulo = document.querySelector(".titulo");

titulo.onmouseover = () => {
  titulo.innerText = "O mouse está aqui";
};

titulo.onmouseout = () => {
  titulo.innerText = "Mouse saiu daqui!";
};
