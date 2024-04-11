//! TODO: Write a funvtion arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal(i.e. contain the same elements in the same order), and false otherwise

//? Example usage

//? arraysAreEqual([1,2,3],[1,2,3]) will return true
//? arraysAreEqual([1,2,3],[1,2,4]) will return false

//* method one

const arraysAreEqual = (arr1,arr2) => {
    if(arr1.length !== arr2.length) return false

    return arr1.every((curVal,index) => curVal === arr2[index])
}

console.log(arraysAreEqual([1,2,3],[1,3,2]));

//* method two 

const arrAreEqual = (arr1,arr2) => {
    if(arr1.length !== arr2.length) return false

    for(let i=0;i<arr1.length;i++){
        if(arr1[i] !== arr2[i]) {
            return false //* it only checks the first pair of equal elements
        }
    }
    return true
}

console.log(arrAreEqual([1,2,3],[1,3,2]));