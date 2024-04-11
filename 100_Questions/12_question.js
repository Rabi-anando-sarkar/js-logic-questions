//! Write a function that atkes an array of integers as inout and removes any duplicate elements,returning a new array wuth only the unique elements.

//? constraints 

//? The input array nay contain both positive and negetive integers.
//? The input array may be empty.
//? The Element in the input array are not guaranteed to be sorted
//? The output array shoulf retain the original order of Element from the array 

//* method one

const removeDuplicates = (arr) => {
    let newArr = new Set(arr)
    return [...newArr]
}

console.log(removeDuplicates([1,1,3,3,5,6,7]));

//* method two

const remDup = (arr) => {
    return Array.from(new Set(arr))
}

console.log(remDup([1,1,3,3,5,6,7]));