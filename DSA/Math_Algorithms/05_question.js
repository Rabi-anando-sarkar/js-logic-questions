//! Recursive Fibonacci sequence

// TODO : Give a number 'n'.find the nth elemnet of the Fibonacci sequence

//? In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
//? The first two numbers in the sequence are 0 and 1. (0, 1, 1, 2, 3, 5, 8...)

//? recursiveFibonacci(0) = 0
//? recursive Fibonacci(1) = 1
//? recursive Fibonacci(6) = 8

function recursiveFibonacci(num) {
    if(num<2) return num
    return recursiveFibonacci(num-1) + recursiveFibonacci(num-2)
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));
