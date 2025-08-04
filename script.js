const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword_El = document.getElementById("firstPassword")
let secondPassword_El = document.getElementById("secondPassword")


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

function reset(){
    let password_1 = ""
    let password_2 = ""

    firstPassword_El.textContent = password_1
    secondPassword_El.textContent = password_2
}

firstPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(firstPassword_El.textContent)
    // alert("First password copied to clipboard!");
});

secondPassword_El.addEventListener("click", function() {
    navigator.clipboard.writeText(secondPassword_El.textContent)
    // alert("Second password copied to clipboard!");
});

