let characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","$","@","!","(","&","%","#","£","¥","^","~","•",":","=","<","/",".","["]

let passwordEl=document.getElementById("password1-el")
let passwordEll=document.getElementById("password2-el")
let passwordlength=  15
let saveEl=document.getElementById("save")
//functions to generate random characters
function generateRandomCharacter(){
  let randomchar=Math.floor(Math.random()*characters.length)
  return characters[randomchar]
}
//function to determine the length of the password characters it's called loops
function generatePassword() {
  let randomPassword= ""
  for (let i = 0; i < passwordlength; i++) {
    // the randompassword merge with the first function
    randomPassword += generateRandomCharacter()
  }
  
  return randomPassword
}

//button that perform the action

function generate() {
  
const generatedPassword1 =generatePassword()
passwordEl.textContent= generatedPassword1
const generatedPassword2 =generatePassword()
passwordEll.textContent= generatedPassword2

}
