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

// Add event listener to generate button on click

generateBtn.addEventListener("click", writePassword);

    var capitalLetter = ["A","B","C","D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q","R","S","T","U","V","W","X","Y","Z"];
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var numberLine = ['0','1','2','3','4','5','6','7','8','9']; 
    var specialCharacter = ["!","#","$","%","&","(",")", "*","+","-",".","/", ":",";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];


// Generate a function to genearte password that includes variables and prompts for all characters

function generatePassword()  {

    var text = "";
    var passwordArray = [];

    var passwordLength = prompt("How long will your password be? Choose b/w 8 and 128");


    if (isNaN(passwordLength)){
        alert("Password length must be a number. Please Try again!");
    return;

      } else if (passwordLength < 8 || passwordLength > 128) {
        alert("Password length can be only between 8 to 128 characters long. Please try again!");
    return;

// Make sure if prompts are selected they refer to the variables above
// If confirm is canceled prompt user to choose all criteria
      }
      else {
        var choiceCap = confirm("Would you like to include upper case letters in your password?");
        if (choiceCap == true) {
          passwordArray = passwordArray.concat(capitalLetter);
          } else {
            choices = alert("You must choose all criteria!");
            passwordArray = [];
            return;
        };


        var choiceLower = confirm("Would you like to include lower case letters in your password?");
        if (choiceLower == true){
          passwordArray = passwordArray.concat(lowerCase);
          } else {
            choices = alert("You must choose all criteria!");
            passwordArray = [];
            return;
        };


        var choiceNumber = confirm("Would you like to numbers in your password?");
        if (choiceNumber == true) {
          passwordArray = passwordArray.concat(specialCharacter);
          } else {
            choices = alert("You must choose all criteria!");
            passwordArray = [];
            return;
        };


        var choiceSpecial = confirm("Would you like to include special character in your password?");
        if(choiceSpecial == true) {
          passwordArray = passwordArray.concat(numberLine);
          } else {
            choices = alert("You must choose all criteria!");
            passwordArray = [];
            return;
        };

      };
    
 

//Building the password
  for (var i = 0; i < passwordLength; i++)
  
    text += passwordArray[Math.floor(Math.random() * passwordArray.length)];
  return text;

}


// Build a copy to clipboard feature

function copyToClipboard() {
  var copyText = document.querySelector("#password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
  }