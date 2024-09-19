const form = document.querySelector("form");
const errorDiv = document.getElementById("error");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
      if (!validateEmail(email.value)) {
        ApplyErrorStyle(email)
      } else {
        removeErrorStyle(email)
        switchPage();
      }
})

function validateEmail(email){
    return email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function ApplyErrorStyle(field){
    errorDiv.style.display = "block"
    field.style.backgroundColor = "#FFE8E6";
    field.style.color = "#FF6649";
    field.style.borderColor = "#C2827D";
    field.classList.add('email-error');
}

function removeErrorStyle(field){
    errorDiv.style.display = "none"
    field.style.backgroundColor = "white";
    field.style.color = "black";
    field.style.borderColor = "hsl(231, 7%, 60%)";
    field.classList.remove('email-error');
}

function switchPage(){
    var element = document.getElementById("sign-up-form-container");
    element.classList.toggle("hide");
    var element = document.getElementById("success-message-container");
    email.value = "";
    element.classList.toggle("hide");
}