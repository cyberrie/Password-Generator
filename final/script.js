// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

// FUNCTION TO PROMPT USER FOR PASSWORD OPTIONS

// define an object containing all password parameters
const passwordParameters = {
  characters: {
    hasNum: true,
    hasUpperCase: true,
    hasLowerCase: true,
    hasSymbol: true,
  },
};

let passwordLen;

function getPasswordOptions() {
  if ((passwordParameters = true && passwordLen >= 10 && passwordLen <= 64)) {
    generatePassword();
  } else {
    console.log(
      "Your password has to have at least one type of each: number, special character, upper case and lower case. Please try again"
    );
  }
}

// FUNCTION FOR GETTING A RANDOM ELEMENT FROM AN ARRAY
function getRandom(arr) {
  // concatenate all arrays
  let allCharacters = specialCharacters.concat(
    numericCharacters,
    lowerCasedCharacters,
    upperCasedCharacters
  );
  // iterating through all arrays and getting a random element from all arrays
  for (let i = 0; i < allCharacters.length; i++) {
    password += allCharacters.toString(
      Math.floor(Math.random() * allCharacters.length)
    );
  }
}

// Arguments object created and assigned keys to each array value
const arguments = {
  lower: lowerCasedCharacters,
  upper: upperCasedCharacters,
  number: numericCharacters,
  symbol: specialCharacters,
};

// FUNCTION TO GENERATE PASSWORD WITH USER INPUT
function generatePassword(arguments) {
  // variable to store generated password
  let password = "";
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
