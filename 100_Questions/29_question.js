//! number range generator

const numberRange = (start,end) => {
    let arr = []
    for(let i=start;i<=end;i++) {
        arr.push(i)
    }
    return arr
}

console.log(numberRange(0,5));
console.log(numberRange(3,7));
console.log(numberRange(-2,2));