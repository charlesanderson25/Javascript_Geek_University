// Requisições assincronas com AJAX

let inputAsync = document.querySelector("input[name=github_user]");
let buttonAsync = document.getElementById("btn1");
let divAsync = document.getElementById("app");

console.log(inputAsync);
console.log(buttonAsync);
console.log(divAsync);

buttonAsync.addEventListener("click", () => {
  divAsync.innerHTML = "";

  let AJAX = new XMLHttpRequest(); // instância do ajax

  AJAX.open("GET", `https://api.github.com/users/${inputAsync.value}`);
  console.log(inputAsync.value);

  AJAX.send(null);

  AJAX.onreadystatechange = () => {
    let divReturn = document.createElement("div");
    let pReturn = document.createElement("p");
    let imgReturn = document.createElement("img");
    let textReturn = "";

    if (AJAX.readyState === 4) {
      if (AJAX.status === 200) {
        usuario = JSON.parse(AJAX.responseText);

        if (usuario["name"] !== null) {
          textReturn = document.createTextNode(usuario["name"]);

          imgReturn.setAttribute("src", usuario["avatar_url"]);

          divReturn.appendChild(imgReturn);
        } else {
          alert(`Usuário ${inputAsync.value} não encontrado!`);
        }
        pReturn.appendChild(textReturn);
        divReturn.appendChild(pReturn);
        divAsync.appendChild(divReturn);

        inputAsync.value = "";
      }
    }
  };
});
