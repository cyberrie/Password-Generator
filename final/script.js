// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  // object storing all the options inside the function
  let options = {};
  // store options into variables
  options.length = prompt("Enter Password Length (10-64):");
  options.lower = confirm("Do you want to include Lowercase Characters?");
  options.upper = confirm("Do you want to include Uppercase Characters?");
  options.numeric = confirm("Do you want to include Numbers?");
  options.special = confirm("Do you want to include Special Characters?");
  return options;
}

// Function from getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// testing getRandom with different arrays
console.log(getRandom(numericCharacters));

let generatedPassword = "";
// Function to generate password with user input
// generate password runs when we click on generate button
function generatePassword() {
  // new array to store the chose password characters
  let bigArray = [];
  // Storing password options function into a new variable
  const passwordOptions = getPasswordOptions();

  // Create an array containing all selected options
  if (passwordOptions.lower) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  }

  if (passwordOptions.upper) {
    bigArray = bigArray.concat(upperCasedCharacters);
  }

  if (passwordOptions.numeric) {
    bigArray = bigArray.concat(numericCharacters);
  }

  if (passwordOptions.special) {
    bigArray = bigArray.concat(specialCharacters);
  }

  // Choose a random character from the bigArray based on the length user selected
  for (let i = 0; i < parseInt(passwordOptions.length); i++) {
    generatedPassword += getRandom(bigArray);
  }
  console.log(generatedPassword, "Password Length", generatedPassword.length);
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
