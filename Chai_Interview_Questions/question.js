//! QUESTION : Implement a custom forEach in Javascript

//? SOLUTION : 

const customForEach = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
    return arr
}

Array.prototype.customForEach()