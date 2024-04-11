//! write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two and false otherwise

//? notes 

//? The input num will be a positive integer.
//? Zero(0) and negetive integres are not considered powers of two 
//? The fucntino should return true if the given number is a power of 2, and flase otherwise 

//* method one

const isPowerOfTwo = (num) => {
    if (num <= 0) return false;

    while(num > 1){
        if(num % 2 !== 0) {
            return false
        }
        num /= 2
    }
    return true
}

console.log(isPowerOfTwo(64));

//* method two

const powerTwo = (num) => {
    let outPut = false;
    for(let i = 1; i < num;i++) {
        if(2**i === num) {
            outPut = true
        }
    }
    return outPut
}

console.log(powerTwo(65));