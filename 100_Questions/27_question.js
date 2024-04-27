//! TODO: Repeat a string

//* method one

const repeatString = (str,num) => {
    if(num <= 0) {
        return str
    }
let rStr = ''

    for(let i=0;i<num;i++) {
        rStr+=str
    }
    return rStr
}

console.log(repeatString('abc',5));

//* method two 

const repeatStr = (str,num) => {
    return num > 0 ? str.repeat(num) : str
}

console.log(repeatStr('rabi',5));
