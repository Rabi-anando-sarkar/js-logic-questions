//! Quick sort

// TODO: Given an array of integers,sort the array

//? const = [-6,20,8,-2,4]
//? quickSort(arr) => should return [-6,-2,4,8,20]

const quickSort = (arr) => {
    if(arr.length < 2) return arr
    const pivot = arr[arr.length-1]
    const left = []
    const right = []
    for(let i=0;i<arr.length-1;i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([-6,20,8,-2,4]));