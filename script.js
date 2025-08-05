import {characters} from "./data.js"

let firstPassword_El = document.getElementById("firstPassword")
let secondPassword_El = document.getElementById("secondPassword")
const generateButton = document.getElementById("generate-btn")
const resetButton = document.getElementById("reset-btn")


generateButton.addEventListener("click", generate);
 function generate() {
    let password_1 = ""
    let password_2 = ""
    let passwordlength = 15
    //let random_value = characters[Math.floor(Math.random()*characters.length)]
    // firstPassword_El.textContent = random_value
    for(let i = 0; i < passwordlength; i++) {
        password_1 += characters[Math.floor(Math.random() * characters.length)]
        password_2 += characters[Math.floor(Math.random() * characters.length)]

        firstPassword_El.textContent = password_1 
       secondPassword_El.textContent = password_2
    }
}
resetButton.addEventListener("click", reset);
 function reset() {
    let password_1 = ""
    let password_2 = ""

    firstPassword_El.textContent = password_1
    secondPassword_El.textContent = password_2
}

firstPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPassword_El.textContent)
    showAlert()
});

secondPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPassword_El.textContent)
    showAlertBtn2()
});

function showAlert(message = 'copied!') {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.className = 'copy-alert';
    document.body.appendChild(alertBox);
  
    // fade out after 1 second
    setTimeout(() => {
      alertBox.classList.add("fade-out");
      setTimeout(() => alertBox.remove(), 500);
    }, 500);
  }
  
  function showAlertBtn2(message = 'copied!') {
    const alertBox = document.createElement('div');
    alertBox.textContent = message;
    alertBox.className = 'copy-alert-1';
    document.body.appendChild(alertBox);
  
    // fade out after 1 second
    setTimeout(() => {
      alertBox.classList.add("fade-out");
      setTimeout(() => alertBox.remove(), 500);
    }, 500);
  }
  
