//! TODO: Convert object to array and vice versa

//* method one

const obj = {
    name: "rabi",
    age: 21,
    city: "delhi"
}

let entries = Object.entries(obj);
let keys = Object.keys(obj);
let values = Object.values(obj);

console.log(entries);
console.log(keys);
console.log(values);
console.log(entries.flat());

const arr = [['height',160],['weight',70],['age',21]]

let newObj = Object.fromEntries(arr)

console.log(newObj);

//* method two

function objToArray(obj) {
    if(typeof obj !== 'object' || obj === null) {
        throw new Error("Input must be a non null object")
    }

    const arr = []
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key)
        }
    }

    // for (const key in obj) {
    //     if (obj.hasOwnProperty(key)) 
    //         valuesArray.push(obj[key]);
    //     }
    // }

    return arr
}

console.log(objToArray({ height: 160, weight: 70, age: 21 }));

function arrayToObj(arr) {
    if(!Array.isArray(arr)) {
        throw new Error("Input must be a non null object")
    }
    const obj = {}
    for(let i=0;i<=arr.length-1;i++) {
        obj[i] = arr[i]
    }

    return obj
}

console.log(arrayToObj([ 'name', 'age', 'city' ]));