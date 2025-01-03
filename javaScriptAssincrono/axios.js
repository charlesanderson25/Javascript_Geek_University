// Utilizando Axios

const axios = require("axios");

let inputAsync = document.querySelector("input[name=github_user]");
let buttonAsync = document.getElementById("btn1");
let divAsync = document.getElementById("app");

axios
  .get(`https://api.github.com/users/${inputAsync.value}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.error(error);
  })
  .finally(function () {});
