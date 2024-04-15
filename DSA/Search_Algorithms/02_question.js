//! Binary search

// TODO: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

//? arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4
//? arr=[-5, 2, 4, 6, 10], t = 6 -> Should return 3
//? arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

//* solution 

const binarySearch = (arr,t) => {
    arr.sort((a,b)=> a-b)
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (t === arr[middleIndex]) return `Element ${t} is at index ${middleIndex}`

        if(t < arr[middleIndex]) {
            rightIndex = middleIndex-1
        } else {
            leftIndex = middleIndex+1
        }
    }
    return -1
}

console.log(binarySearch([-5, 4, 2, 6, 10,11],10));