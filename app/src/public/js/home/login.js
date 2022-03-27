'use strict'

const id = document.querySelector("#id"),
  pswd = document.querySelector("#pswd"),
  loginBtn = document.querySelector('button')

loginBtn.addEventListener("click", login);

function login () {
  const req = {
    id: id.value,
    pswd: pswd.value,
  };
  console.log(req, JSON.stringify(req))
}

fetch("/login", {
    method: "POST"
  body: JSON.stringify(req)
 // })
//};