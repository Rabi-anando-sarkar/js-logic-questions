//! TODO: write a fucntion findMax that takes an array of numbers as input and returns the maximum number in the array

//* method one

const findMax = (str) => {
    console.log(str);
    return Math.max(...str)
}

console.log(findMax([1,2,3,4,56,9]));