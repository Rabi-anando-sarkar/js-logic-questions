//! TODO: Write a function isEmptyObject that takes an object as input and determines whether it is empty or not. An empty object is defined as an object with no own properties.

//* method one

function isEmptyObject(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            return `Not Empty`
        }
    }
    return `Empty`
}

console.log(isEmptyObject({'name' : 'rabi'}));
console.log(isEmptyObject({}));
console.log(isEmptyObject({'keyWithNull' : null}));
console.log(isEmptyObject({'keyWithUndefined' : undefined}));

//* method two

function isEmptyObjectNew(obj) {
    return Object.keys(obj).length === 0 ? `Empty` : `Not Empty`
}

console.log(isEmptyObjectNew({'name' : 'rabi'}));
console.log(isEmptyObjectNew({}));
console.log(isEmptyObjectNew({'keyWithNull' : null}));
console.log(isEmptyObjectNew({'keyWithUndefined' : undefined}));
