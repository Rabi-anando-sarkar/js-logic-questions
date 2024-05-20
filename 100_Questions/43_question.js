//! TODO: FizzBuzz Challenge

//? Write a function fizzbuzz that accepts two numbers, startNum and endNum, as input. The function should return an array containing numbers and specific strings based on the following rules:
//? For each number i in the range from startNum to endNum (both inclusive):
//? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
//? If i is divisible by only 3, include "Fizz" in the result.
//? If i is divisible by only 5, include "Buzz" in the result.
//? Otherwise, include the number i itself.

const fizzBuzz = (n1,n2) => {
    let arr = [];
    for (let i = n1; i <= n2; i++) {
        if(i%3 === 0 && i%5 === 0) {
            arr.push('FizzBuzz')
        } else if (i%3 === 0) {
            arr.push('Fizz')
        } else if (i%5 === 0) {
            arr.push('Buzz')
        } else {
            arr.push(i)
        }
    }
    return arr
}

console.log(fizzBuzz(1,15));