//! TODO : Truncate a string 

//* method one

const truncateString = (str) => {
    if(str.length > 8){
        return str.slice(0,8)+'...'
    } 
    return str
}

console.log(truncateString('rabianandosarkar'));
console.log(truncateString('rabi'));

//* method two

const truncateStr = (str,count) => {
    return str.length <= count ? str : str.slice(0,count).concat('...')
}

console.log(truncateStr('rabianandosarkar',10));
console.log(truncateStr('rabi',5));