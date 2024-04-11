//! TODO: Write a fucntion called calculateAverage that takes an array of numbers as input and retuens the averge of those numbers.

//? Your fucntion should

//? Accept an array of numbers as input
//? Calculate the sum of all the numbers in the array
//? Divide the sum by the total number of elements in the array to find the average
//? Return the Calculated average

//* method one

const calculateAverage = (arr) => {
    let sum = 0
    let avg = 0
    for(let i=0;i<=arr.length;i++){
        sum += i
    }
    avg = sum/arr.length
    return avg
}

console.log(calculateAverage([1,2,3,4,5]));

//* method two

const calAvg = (arr) => {
    let total = arr.reduce((accum,curElement) => accum + curElement,0)
    let avg = total/arr.length
    return `Total : ${total} & Average : ${avg}`
}

console.log(calAvg([1,2,3,4,5,6,7,8,9,10]));