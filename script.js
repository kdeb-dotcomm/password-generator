import {characters} from "./data.js"

let firstPassword_El = document.getElementById("firstPassword")
let secondPassword_El = document.getElementById("secondPassword")


window.generate = function() {
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

 window.reset = function() {
    let password_1 = ""
    let password_2 = ""

    firstPassword_El.textContent = password_1
    secondPassword_El.textContent = password_2
}

firstPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPassword_El.textContent)
});

secondPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPassword_El.textContent)
});

