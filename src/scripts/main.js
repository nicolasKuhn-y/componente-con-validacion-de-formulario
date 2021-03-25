const form = document.querySelector("form");
const inputNode = document.querySelectorAll(".input-normal");
const errorContainer = document.querySelectorAll(".error-container");
const errorText = document.querySelectorAll(".error-text");
const inputField = document.querySelectorAll(".input-normal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = inputNode[0];
  const lastName = inputNode[1];
  const email = inputNode[2];
  const password = inputNode[3];

  if (name.value === "") {
    errorContainer[0].style.visibility = "visible";
    errorText[0].textContent = "First name is require";
    inputField[0].classList.replace("input-normal", "input-showError");
  }

  if (lastName.value === "") {
    errorContainer[1].style.visibility = "visible";
    errorText[1].textContent = "Last name is require";
    inputField[1].classList.replace("input-normal", "input-showError");
  }

  if (email.value === "") {
    errorContainer[2].style.visibility = "visible";
    errorText[2].textContent = "The email is not valid";
    inputField[2].classList.replace("input-normal", "input-showError");
  }

  if (password.value === "") {
    errorContainer[3].style.visibility = "visible";
    errorText[3].textContent = "The password is not valid";
    inputField[3].classList.replace("input-normal", "input-showError");
  }
});
