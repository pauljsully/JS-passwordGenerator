// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

if (password)  {
  passwordText.value = password;
}
else {
    passwordText.value = '';
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var capitalLetter = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberLine = ['0','1','2','3','4','5','6','7','8','9']; 
var specialCharacter = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

function generatePassword() {

    let passwordLength = prompt("How long will your password be? Choose b/w 8 and 128");
    if (isNaN(passwordLength)){
        alert("Password length must be a number. Please Try again!");
        return;
      } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length can be only between 8 to 128 characters long. Please try again!");
      return;
      };

    let confirmCapital = "Would you like CAPITAL Letters in your password";
    choiceCapital = confirm(choiceCapital);


    let confirmLowercase


    let confirmNumber


    let confirmspecialCharacter
  

}





