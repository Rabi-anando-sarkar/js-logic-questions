//! TODO: Write a function to calculate the factorial of a number. (using Recursion

// Recursion:

//? Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input until it reaches a base case.

// Base Case:

//? The base case is the condition in a recursive function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function would continue calling itself indefinitely, leading to what's known as infinite recursion.

// Recursive Case:

//? The recursive case is the condition in a recursive function that determines when the function should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion

function recursiveFactorial(num) {
    if (num === 1) return 1
    return num*recursiveFactorial(num-1)
}

console.log(recursiveFactorial(5));