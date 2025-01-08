// Utilizando Axios

// const axios = require("axios");

let inputAsync = document.querySelector("input[name=github_user]");
let buttonAsync = document.getElementById("btn1");
let divAsync = document.getElementById("app");

buttonAsync.addEventListener("click", () => {
  divAsync.innerHTML = "";
  let textReturn = "";
  let pReturn = document.createElement("p");
  let imgReturn = document.createElement("img");

  axios
    .get(`https://api.github.com/users/${inputAsync.value}`)
    .then(function (response) {
      console.log("Retorno de response:", response);

      if (response.data.name !== null && response.status === 200) {
        textReturn = document.createTextNode(response.data.name);
        console.log(`O usuário GitHb é: ${textReturn.nodeValue}`);

        imgReturn.setAttribute("src", response.data.avatar_url);

        pReturn.appendChild(textReturn);
        console.log(`O valor de pReturn é: ${pReturn.innerHTML}`);
        divAsync.appendChild(pReturn);
        divAsync.appendChild(imgReturn);
        inputAsync.value = "";
      } else {
        alert(`O usuário ${inputAsync.value} é inválido`);
        console.log(`O usuário ${inputAsync.value} é inválido`);
      }
    })
    .catch(function (error) {
      console.error(error);
      alert(`O usuário '${inputAsync.value}' é inválido`);
      console.log(`O usuário '${inputAsync.value}' é inválido`);
    })
    .finally(function () {});
});
