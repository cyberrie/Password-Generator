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

// use window prompts to ask questions for numbers, upper case, lower case and symbols, and then add conditions after
// window prompts have to have boolean values as conditions

// define an object containing all password parameters for later on when adding conditions to prompts
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
  // password initialized a an empty string
  let password = "";

  // get the desired password length from the user
  let passwordLength = prompt("Enter the desired password length:");

  // get the desired password options from the user
  let includeSpecialCharacters = confirm(
    "Select OK to include special characters in the password"
  );
  let includeUpperCaseLetters = confirm(
    "Select OK to include uppercase letters in the password"
  );
  let includeLowerCaseLetters = confirm(
    "Select OK to include lowercase letters in the password"
  );
  let includeSpecialCharacteers = confirm(
    "Select OK to include numbers in the password"
  );

  // for loop to generate the password

  for (let i = 0; i < passwordLength; i++) {
    getRandom(numericCharacters);
  }
}

// FUNCTION FOR GETTING A RANDOM ELEMENT FROM AN ARRAY
// separate loop for numeric arrays
// separate loop for characters arrays: concatenate all arrays with letters/characters (special characters, uppercase, lowercase)

let charArrays = [
  specialCharacters,
  lowerCasedCharacters,
  upperCasedCharacters,
];

function getRandom(arr) {
  let randomElement = "";

  for (let i = 0; i < arr.length; i++) {
    // if looping through a numbers array
    if (arr === numericCharacters) {
      randomElement = Math.floor(Math.random() * numericCharacters.length);
      // if looping through a character/letter array
    } else {
      randomElement =
        charArrays[i][Math.floor(Math.random() * charArrays[i].length)];
    }
    return randomElement;
  }
}

// log into the console to check if it's working
console.log(getRandom(charArrays[0]));
console.log(getRandom(charArrays[1]));
console.log(getRandom(charArrays[2]));
console.log(getRandom(numericCharacters));

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
