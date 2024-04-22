//! Write a JavaScript function to count the occurrences of each element in an array and store the counts in an object. The keys of the object should represent the elements of the array, and the values should represent the number of times each element appears in the array.


//? Here's what the function should do:
//? Accept an array of numbers as input.
//? Create an empty object called counts to store the counts of each element.
//? Iterate through each number in the array.
//? For each number, increment the count in the counts object.
//? If the count for a number does not exist yet, initialize it to 1.
//? Return the counts object containing the counts of each element.

//* method one

const countOccurance = (arr) => {
    const count = {}

    arr.forEach(element => {
        if(count[element]){
            count[element]++
        } else {
            count[element] = 1
        }
    });

    return count
}

console.log(countOccurance([1,2,3,4,4,1,1,3]));

//* method two

const countOccuranceNew = (arr) => {
    const count = {}
    for(let element of arr) {
        count[element] = (count[element] || 0) + 1
    }

    return count
}

console.log(countOccuranceNew([1,2,3,4,4,1,1,3]));