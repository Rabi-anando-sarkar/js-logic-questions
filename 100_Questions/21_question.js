//! TODO: Write a function called calculateMean that takes an array of numbers as input and returns the mean (average) of those numbers.

//todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of a collection of numbers.

//? Constraints:

//? The input array may contain positive and negative integers.
//? The input array may be empty. If it is empty, the function should return 0.

const calculateMean = (arr) => {
    if(arr.length === 0) return 0
    let sum = arr.reduce((acc,curVal) => acc + curVal, 0)
    let mean = sum/arr.length
    return mean
}

console.log(calculateMean([1,2,3,4,5]));