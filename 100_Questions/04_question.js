//! TODO: Write a function called checkTrinagleType that takes three parameters representing the lengths of the sides of a triangle.The function should return a string indicating the type of triangle: "equilateral" , "isosceles", "scalene".

const checkTrinagleType = (a,b,c) => {
    if(a === b && b === c) return 'equilateral' 
    if (a === b || a === c || b === c) return 'isosceles'
    return 'scalene'
}

console.log(checkTrinagleType(91,91,9));