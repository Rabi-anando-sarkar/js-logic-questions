//! TODO: Write a function factorial that takes a non-negetive integer num as input and returns its factorial.The factorial of a non-negetice integer n, deonted as n!, is the product of all psoitive integers less than or qual to n.The factorial of 0 is defined as 1.

//? Examples :

//? factorial(0) => 1
//? factorial(1) => 1
//? factorial(2) => 2
//? factorial(3) => 6
//? factorial(4) => 24
//? factorial(5) => 120

// Your fucntion should work for any non-negetive integer input.

const factorial = (num) => {
    fact = 1
    for(let i=num;i>=1;i--) {
        fact *= i
    }
    return fact
}

console.log(factorial(76));