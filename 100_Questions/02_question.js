//! TODO: You are required to implement a function generateHash that generates a hash tag from a given input string.

//* method one

const generateHashTag = (str) => {
    if (str.length > 280 || str.trim().length === 0) return false

    let splitStr = str.split(" ")
    let capFirstElement = splitStr.map((element) => (element.replace(element[0], element[0].toUpperCase())))
    let arrToStrAndHashIt = `#${capFirstElement.join("")}`

    return arrToStrAndHashIt
}

console.log(generateHashTag("rabi is loving javascript"));

//* method two 

const generateHash = str => {
    if (str.length > 280 || str.trim().length === 0) return false

    let splitStr = str.split(" ")
    let capFirstElement = splitStr.map((element) => element.charAt(0).toUpperCase() + element.slice(1))
    let arrToStrAndHashIt = `#${capFirstElement.join("")}`

    return arrToStrAndHashIt
}

console.log(generateHash('rabi is loving javascript practice'));