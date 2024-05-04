//! TODO: Coding Challenge: Random Hex Color Generator

//? Write a function randomHexColor that generates a random hexadecimal color code each time it is called. The function should return a string representing the random color code in the format '#RRGGBB', where RR, GG, and BB are two-digit hexadecimal numbers representing the and components of the color, respectively.
//? Your challenge is to implement the randomHexColor function using JavaScript and ensure that it produces a valid hexadecimal color code with a length of 7 characters (including the # symbol).

//*? Constraints:
//? The output color code should always start with #followed by six hexadecimal characters (RRGGBB). //? The function should not take any parameters.
//? The generated color codes should be unique and evenly distributed across the entire range of possible hexadecimal color codes

//* method one

function hexColGen () {
    let hexVal = '0123456789ABCDEF'
    let hexCode = '#'
    for(let i=0;i<6;i++) {
        hexCode += hexVal[Math.floor(Math.random() * 16)]
    }
    return hexCode
}

console.log(hexColGen());

//* method two

function hexadecimal() {
    return Math.random().toString(16).slice(2,8).padEnd(6,0).padStart(7,'$')
}

console.log(hexadecimal());