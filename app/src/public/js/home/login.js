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

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
}