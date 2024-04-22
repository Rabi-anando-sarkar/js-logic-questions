//! TODO: Write a function to reverse a string without using any built-in methods or lobraries. The function should take a string as input and retunr the reversed string

//* method one

const reversString = (str) => {
    let arr = []
    for(let i=str.length-1;i>=0;i--) {
        arr.push(str[i])
    }

    return arr.join("")
}

console.log(reversString("rabi"));

//* method two

const reversStringNew = (str) => {
    let newStr = ""
    for(let i=str.length-1;i>=0;i--) {
        newStr += str[i]
    }

    return newStr
}

console.log(reversStringNew("rabi"));