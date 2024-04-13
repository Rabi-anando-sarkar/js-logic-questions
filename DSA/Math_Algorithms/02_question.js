//! Factorial of a number

// TODO: Give an integer 'n', find the factorial of that integer

//? In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.
//? Factorial of zero is 1.
//? factorial(4) = 4*3*2*1 = 24
//? factorial(5) = 5*4*3*2*1 = 120

//* Solution :  

const factorial = (num) => {
    let fact = 1;
    for(let i=num;i>=1;i--){
        fact*=i
    }
    return fact
}

console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));