const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  // first Name validation
  if (fnameValue === "") {
    setError(fname, "The first name can not be blank");
  } else {
    setSuccess(fname);
  }
  //Last Name validation
  if (lnameValue === "") {
    setError(lname, "The last name can not be blank");
  } else {
    setSuccess(lname);
  }
  // Password validation
  if (passwordValue == "") {
    setError(password, "The password can not be blank");
  } else if (passwordValue.length < 8) {
    setError(password, "The password can not be less than 8 charcters");
  } else {
    setSuccess(password);
  }
  // Second Password validation
  if (passwordValue2 == "") {
    setError(password2, "The password can not be blank");
  } else if (passwordValue !== passwordValue2) {
    setError(password2, "Password does not match");
  } else if (passwordValue2.length < 8) {
    setError(password2, "Password can not be less than 8 charcters");
  } else {
    setSuccess(password2);
  }
  //Email validation
  if (emailValue == "") {
    setError(email, "The email can not be blank");
  } else if (!isEmail(emailValue)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }
};

const setError = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form__control error";
};
const setSuccess = (input) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form__control success";
  small.innerText = "";
};
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
