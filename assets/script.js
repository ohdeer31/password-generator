// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberger = "1234567890";
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialcaseChar = "~!@#$%&*-+=<,>.?/";


function generatePassword() {
  // var password = "password!";
  // TODO: add code to generate the password here
  // return password;
  var userInput = prompt("Enter the length of password you would like to generate.");
  if (!(userInput >= 8 && userInput <= 128)) {
    if (userInput < 8) {
      alert("Too Short, try again!");
      return;
    } else if (userInput > 128) {
      alert("Too long, try again!");
      return;
    } else {
      alert("Invalid Input!");
      return;
    }
  }
  var numberAns = confirm("Do you want to have numbers in your password?");
  var lowercaseAns = confirm("Do you want to have lowercase letters in your password?");
  var uppercaseAns = confirm("Do you want to have uppercase letters in your password?");
  var specialcaseAns = confirm("Do you want to have special characters in your password?");

  var result = "";
  for (var i = 0; i < userInput; i++) {
    if (numberAns && lowercaseAns && uppercaseAns && specialcaseAns) {
      //all
      result += numberger.concat(lowerCharacters, upperCharacters, specialcaseChar).charAt(Math.floor(Math.random() * numberger.concat(lowerCharacters, upperCharacters, specialcaseChar).length));
    } else if (numberAns && lowercaseAns && uppercaseAns && !specialcaseAns) {
      //no special
      result += numberger.concat(lowerCharacters, upperCharacters).charAt(Math.floor(Math.random() * numberger.concat(lowerCharacters, upperCharacters).length));
    } else if (numberAns && lowercaseAns && !uppercaseAns && specialcaseAns) {
      //no upper
      result += numberger.concat(lowerCharacters, specialcaseChar).charAt(Math.floor(Math.random() * numberger.concat(lowerCharacters, specialcaseChar).length));
    } else if (numberAns && !lowercaseAns && uppercaseAns && specialcaseAns) {
      //no lower
      result += numberger.concat(upperCharacters, specialcaseChar).charAt(Math.floor(Math.random() * numberger.concat(upperCharacters, specialcaseChar).length));
    } else if (!numberAns && lowercaseAns && uppercaseAns && !specialcaseAns) {
      //no number
      result += lowerCharacters.concat(upperCharacters, specialcaseChar).charAt(Math.floor(Math.random() * lowerCharacters.concat(upperCharacters, specialcaseChar).length));
    } else if (!numberAns && !lowercaseAns && uppercaseAns && specialcaseAns) {
      //no number & lower
      result += upperCharacters.concat(specialcaseChar).charAt(Math.floor(Math.random() * upperCharacters.concat(specialcaseChar).length));
    } else if (!numberAns && !lowercaseAns && !uppercaseAns && specialcaseAns) {
      //no number & lower & upper
      result += specialcaseChar.charAt(Math.floor(Math.random() * specialcaseChar.length));
    } else if (numberAns && !lowercaseAns && !uppercaseAns && specialcaseAns) {
      //no lower & upper
      result += numberger.concat(specialcaseChar).charAt(Math.floor(Math.random() * numberger.concat(specialcaseChar).length));
    } else if (numberAns && !lowercaseAns && !uppercaseAns && !specialcaseAns) {
      //no lower & upper & special
      result += numberger.charAt(Math.floor(Math.random() * numberger.length));
    } else if (numberAns && lowercaseAns && !uppercaseAns && !specialcaseAns) {
      //no upper & special
      result += numberger.concat(lowerCharacters).charAt(Math.floor(Math.random() * numberger.concat(lowerCharacters).length));
    } else if (!numberAns && lowercaseAns && uppercaseAns && !specialcaseAns) {
      //no number & special
      result += lowerCharacters.concat(upperCharacters).charAt(Math.floor(Math.random() * lowerCharacters.concat(upperCharacters).length));
    } else if (!numberAns && lowercaseAns && !uppercaseAns && specialcaseAns) {
      //no number & upper
      result += lowerCharacters.concat(specialcaseChar).charAt(Math.floor(Math.random() * lowerCharacters.concat(specialcaseChar).length));
    } else if (!numberAns && lowercaseAns && uppercaseAns && !specialcaseAns) {
      //no number & special
      result += lowerCharacters.concat(upperCharacters).charAt(Math.floor(Math.random() * lowerCharacters.concat(upperCharacters).length));
    } else if (numberAns && !lowercaseAns && uppercaseAns && !specialcaseAns) {
      //no lower & special
      result += numberger.concat(upperCharacters).charAt(Math.floor(Math.random() * numberger.concat(upperCharacters).length));
    } else if (!numberAns && lowercaseAns && !uppercaseAns && !specialcaseAns) {
      //no number & upper & special
      result += lowerCharacters.charAt(Math.floor(Math.random() * lowerCharacters.length));
    } else {
      //none
      result = "Why are you even here?"
    }
  } 
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
