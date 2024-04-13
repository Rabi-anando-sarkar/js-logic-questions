//! Power of two

// TODO: Give a positive integer 'n',determine if the number is a power of 2 or not

//? An integer is a power of two if there exists an integer 'x' such that 'n' === 2x
//? isPowerOfTwo(1) = true (2^0)
//? isPowerOfTwo(2) = true (2^1)
//? isPowerOfTwo(5) = false//? 

//? Power of two - Pseudocode

//? n = 8
//? 8/2 = 4 (remainder 0)
//? 4/22 (remainder 0)
//? 2/21 (remainder 0)

//? If remainder is not 0 in any step, 'n' is not a power of two
//? If remainder is O and 'n' comes down to 1 eventually, n is a power of two.

//* Solution : 

const isPowerOfTwo = (num) => {
    if(num<1) return false
    if(num===1) return true
    if(num===2) return true
    while(num>1){
        if(num%2 === 0) return true
        num/=2
    }
    return false
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));

//* Bitwise Power of two

//? 1 -> 1
//? 2 -> 10
//? 3 -> 100
//? 4 -> 1000

//? 1-0001 & 0-0000 = 0-0000
//? 2-0010 & 1-0001 = 0-0000
//? 3-0100 & 2-0010 = 0-0000
//? 4-1000 & 3-0100 = 0-0000

const isPowerOfTwoBitwise = (num) => {
    if(num < 1) return false
    return (num & (num -1)) === 0
}

console.log(isPowerOfTwoBitwise(1));
console.log(isPowerOfTwoBitwise(2));
console.log(isPowerOfTwoBitwise(5));
console.log(isPowerOfTwoBitwise(8));