//! TODO: Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the median value. If the array has an even number of elements, return the average of the two middle values.

//? For example, the median of 3, 3, 5, 9, 15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3, 5, 7, 9 is (5+7)/2 = 6.

//? Tips

//? Sort the array in ascending order.
//? If the array has an odd number of elements, the median is the middle element.
//? If the array has an even number of elements, the median is the average of the two middle elements.

const calculateMedian = (arr) => {
    if(arr.length === 0) return 0
    
    const sortedArr = arr.sort((a,b) => a-b)
    const mid = Math.floor(sortedArr.length / 2)
    if(sortedArr.length % 2 !== 0) {
        return sortedArr[mid]
    } else {
        return (sortedArr[mid -1] + sortedArr[mid])/2
    }
}

console.log(calculateMedian([3.5,7,9]));
console.log(calculateMedian([1,3,5,7,9,11]));