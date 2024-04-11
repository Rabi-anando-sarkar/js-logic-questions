//! Write a function to calculate the sum of all elements in an array

//? Example : [1,2,3] => [1*1,2*2,3*3] => [1,4,9] => 14

//* method one

const sqSum = (arr) => {
    let total = 0
    let newArr = arr.map((item) => item*item)
    for (const n of newArr) {
        total+=n
    }
    return total
}

console.log(sqSum([3,4]));

//* method two

const sumOfSquares = (arr) => {
    return arr.reduce((total,current) => total+= current * current,0)
}

console.log(sumOfSquares([3,4]));

//* method three

const sumSquare = (num) => {
    let sum = 0;
    for (const n of num) {
        sum+= n * n;
    }
    return sum
}

console.log(sumSquare([3,4]));

