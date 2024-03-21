const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-pass");
let passwordData = "";
let confirmPasswordData = "";

password.oninput = (event) => {
  passwordData += event.data;
  error();
};
confirmPassword.oninput = (event) => {
  console.log(event);
  confirmPasswordData += event.data;
  error();
};
form.onsubmit = (event) => {
  event.preventDefault();
  error();
};
function error() {
  passwordData == confirmPasswordData ? hideError() : showError();
}
function showError() {
  document.querySelector("#password-err").style.display = "block";
  confirmPassword.classList.add("err");
  password.classList.add("err");
}
function hideError() {
  document.querySelector("#password-err").style.display = "none";
  password.classList.remove("err");
  confirmPassword.classList.remove("err");
}
