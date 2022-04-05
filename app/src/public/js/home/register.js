'use strict'

const id = document.querySelector("#id"),
  pswd = document.querySelector("#pswd"),
  pswdConfirm = document.querySelector('#pswd-confirm'),
  email = document.querySelector('#email'),
  registerBtn = document.querySelector('button')

registerBtn.addEventListener("click", register);

function register() {
  if (!id.value) {
    return alert("아이디 입력 좀")
  }
  if (pswd.value !== pswdConfirm.value) {
    return alert("비밀번호 일치 ㄴㄴ")
  }

  const req = {
    id: id.value,
    pswd: pswd.value,
    pswdConfirm: pswdConfirm.value,
    email: email.value,
  };

  console.log(req)

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
}