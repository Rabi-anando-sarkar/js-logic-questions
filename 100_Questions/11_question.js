//! write a function that takes a number as input and returns the sum of its digits

//? Contraints:

//? The input number will always be a positive integer.
//? The input number can have multiple digits.
//? The output should be the sum of all the digits in the input number

//* method one

const sumOfDigits = (num) => {
    let strNum = num.toString()
    let sum = 0
    for(let i=0;i<strNum.length;i++) {
        sum += parseInt(strNum[i],10)
    }
    return sum
}

console.log(sumOfDigits(333));

//* method two

const sumDigits = (num) => {
    let arr = Array.from(String(num), Number)
    return arr.reduce((acc,cur) => acc + cur,0)
}

console.log(sumDigits(333));

//* method three

const sumDigi = (num) => {
    let sum = 0
    // loop until num gets 0
    while(num > 0) {
        const digit = num%10;
        sum += digit
        num = Math.floor(num/10)
    }
    return sum
}

console.log(sumDigi(333));