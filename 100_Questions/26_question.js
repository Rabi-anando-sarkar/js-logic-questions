const recursiveFibonacci = (num) => {
    if(num<2) return num
    return recursiveFibonacci(num-1) + recursiveFibonacci(num-2)
} 

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(3));