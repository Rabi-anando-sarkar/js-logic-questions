//! Recursive factorial of a number

// Todo: Give an integer 'n',find the factorial of that integer.

//? The factorial of a non-negative integer 'n', denoted nl, is the product of all positive integers less than or equal to 'n'.

//? Factorial of zero is 1.
//? factorial (4)=4*3*2*1 = 24
//? factorial(5) = 5*4*3*2*1 = 120

function factorial(num) {
    if(num <= 1) return 1
    return num*factorial(num-1)
}

console.log(factorial(4));