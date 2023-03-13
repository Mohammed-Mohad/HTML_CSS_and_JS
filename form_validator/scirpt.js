const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const pass2 = document.getElementById("password2");

//Error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//sucess message
function showSucess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control valid";
}

//checks required input
function checkRequired(intputArr) {
  intputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSucess(input);
    }
  });
}

//checks length
function checkLength(input, min, max) {
  if (input.value.length < min && input.value.length != 0) {
    showError(input, `${getFieldName(input)} must be greater than ${min}`);
  } else if (input.value.length > max && input.value.length != 0) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} character`
    );
  } else showSucess(input);
}

// check password match
function checkPassMatch(input, input2) {
  if (input.value !== input2.value) {
    showError(input, `passwords do not match`);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmail(input) {
  const re =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSucess(input);
  } else showError(input, `email is invalid`);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, pass2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkLength(pass2, 6, 25);
  checkPassMatch(password, pass2);
  checkEmail(email);
});
