//! TODO: Write a fucntion to check if a character is uppercase or lowercase

//? Constraints

//? The input char will be a single Character. 
//? The character can be any printable ASCII character. 
//? You can assume that the input will always be a string of length 1. 

const isUpperCase = (char) => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true;
    return false
}

console.log(isUpperCase('S'));
console.log(isUpperCase('a'));

const isLowerCase = (char) => {
    return char === char.toLowerCase()
}

console.log(isLowerCase('S'));
console.log(isLowerCase('a'));
