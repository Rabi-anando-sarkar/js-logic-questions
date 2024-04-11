//! TODO: Write a function to sort an array in an ascending order.

//* method one

const sortAscending = (arr) => {
    arr.sort((a,b) => a-b)
    return arr
}

console.log(sortAscending([4,3,15,7,1]));



