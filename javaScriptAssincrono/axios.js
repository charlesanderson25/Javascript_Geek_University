// Utilizando Axios

// const axios = require("axios");

let inputAsync = document.querySelector("input[name=github_user]");
let buttonAsync = document.getElementById("btn1");
let divAsync = document.getElementById("app");

buttonAsync.addEventListener("click", () => {
  divAsync.innerHTML = "";
  let textReturn = "";
  let pReturn = document.createElement("p");

  axios
    .get(`https://api.github.com/users/${inputAsync.value}`)
    .then(function (response) {
      if (response.data.name !== null) {
        textReturn = document.createTextNode(response.data.name);
        console.log(`O usuário GitHb é: ${textReturn.nodeValue}`);

        pReturn.appendChild(textReturn);
        console.log(`O valor de pReturn é: ${pReturn.innerHTML}`);
        divAsync.appendChild(pReturn);
      }
    })
    .catch(function (error) {
      console.error(error);
    })
    .finally(function () {});
});
