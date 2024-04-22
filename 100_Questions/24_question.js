//!  TODO: Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently).

//? Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique (1.e., there won't be multiple numbers with the same highest frequency)

//* method one

const findMode = (arr) => {
    let count = {}
    let maxNum = 0
    let mode 
    for (const iterator of arr) {
        count[iterator] = (count[iterator] || 0) + 1
        if(count[iterator] > maxNum) {
            maxNum = count[iterator]
            mode = iterator
        }
    }
    return mode
}

console.log(findMode([1,2,3,4,4,1,1,3]));
