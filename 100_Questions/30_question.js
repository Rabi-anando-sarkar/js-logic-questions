//! last question using recursion

function numberRange(start,end,arr=[]) {
    if(start <= end) {
        arr.push(start)
        return numberRange(start+1,end,arr)
    }
    return arr
}

console.log(numberRange(1,9));