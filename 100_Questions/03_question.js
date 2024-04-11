//! TODO: Write a function called countChar that takes two parameters: a string and a character to count.The function should return the number of times the specified character appears in the string.


//* method one

const countChar = (str,e) => {
    str = str.toLowerCase()
    e = e.toLowerCase()

    //* remember whenever you need to retrun a single value always use reduce method

    let splitStr = str.split("").reduce((acc,crrChar) => {
        if(crrChar === e) { acc++ }
        return acc
    },0)

    return splitStr
}

// console.log(countChar("Possibility",'i'));

//* method two

const countCharNow = (str,e) => {
    
    let word = str.toUpperCase()
    let char = e.toUpperCase()

    let splitStr = word.split("")
    let counted = splitStr.filter(letter => letter === char).length
    
    return counted
}

console.log(countCharNow('Hello','l'));