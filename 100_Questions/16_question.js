//! Write  a function findMe that takes an array of numbers as input and returns the minimum value found in the array

//? Constraints:

//? The input array may contain both negetive and positive integers. 
//? The input array may be empty. 
//? The input array may conatin duplicate values.

//* method one 

const findMe = (arr) => {
    let min = arr[0]
    arr.map((item) => item > min ? min : min = item)
    return min
}

console.log(findMe([1,2,3,4]));

//* method two 

const fMe = (arr) => {
    if(arr.length === 0) return `empty array`
    return Math.min(...arr)
}

console.log(fMe([]));