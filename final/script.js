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

// function to check for passwod characters, that at least one is selected
function getCharOptions(passOptions) {
  return (
    passOptions.lower ||
    passOptions.upper ||
    passOptions.numeric ||
    passOptions.special
  );
}
// Function to prompt user for password options
function getPasswordOptions() {
  // Object storing all the options inside the function
  let passOptions = {};

  // Check for password length
  passOptions.length = 0;
  while (!(passOptions.length >= 10 && passOptions.length <= 64)) {
    passOptions.length = prompt("Enter Password Length (10-64):");
  }

  // Store options into variables, wrapped into while loop to check for character parameters
  while (true) {
    passOptions.lower = confirm("Do you want to include Lowercase Characters?");
    passOptions.upper = confirm("Do you want to include Uppercase Characters?");
    passOptions.numeric = confirm("Do you want to include Numbers?");
    passOptions.special = confirm("Do you want to include Special Characters?");

    // check if at least one character type has been selected
    if (getCharOptions(passOptions)) {
      break;
    } else alert("Error: You must select AT LEAST ONE character type.");
  }
  return passOptions;
}

// Function from getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// testing getRandom with different arrays
// console.log(getRandom(numericCharacters));

// Function to generate password with user input
// This function runs when the user clicks on generate button
function generatePassword() {
  // new variable for generatedPassword set to an empty string inside the function, so it resets textarea every time the button Generate Password is clicked
  let generatedPassword = "";
  // new array to store the chose password characters
  let bigArray = [];
  // Storing password options function into a new variable
  const passwordOptions = getPasswordOptions();

  if (passwordOptions.lower) {
    // Create an array containing all selected options and concatenate further selected accordingly
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
