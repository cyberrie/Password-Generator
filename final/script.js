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
  const passOptions = {};

  passOptions.length = prompt("Enter Password Length (10-64):");
  passOptions.lowercase = confirm();
  passOptions.upperrcase = confirm;
  passOptions.numeric = confirm;
}

// Function from getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// FUNCTION TO GENERATE PASSWORD WITH USER INPUT
// generate password runs when we click on generate button

let bigArray = [];
let generatedPassword = "";
function generatePassword() {
  // storing password options into a new variable
  const passwordOptions = getPasswordOptions();

  // Make an array containing all selected options
  if (passwordOptions.lowercase) {
    bigArray = bigArray.concat(lowerCasedCharacters);
  }

  if (passwordOptions.upperrcase) {
    bigArray = bigArray.concat(upperCasedCharacters);
  }

  if (passwordOptions.numeric) {
    bigArray = bigArray.concat(numericCharacters);
  }

  if (passwordOptions.concat) {
    bigArray = bigArray.concat(specialCharacters);
  }

  // choose a random character from the bigArray based on the length user selected
  for (let i = 0; i < parseInt(passwordOptions.length); i++) {
    generatePassword += getRandom(bigArray);
  }
  console.log("Generated Password:", generatedPassword);
  console.log(bigArray);
  console.log(passwordOptions);

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
