//! TODO: Write a function findLongestWord that takes a string as input and returns the longest word in the string.If there are multiple longest words, return the fisrt one encountered.


//* method one

const findLongestString = (str) => {
    if(str.trim().length === 0) return false

    let trimIt = str.trim()
    let splitIt = trimIt.split(" ") 
    let sorter = splitIt.sort((a,b) => b.length - a.length)
    return sorter[0]
}

console.log(findLongestString(" Collection Of Long Strings  "));

//* method two

const findLongString = str => {
    if(str.trim().length === 0) return false

    let trimStr = str.trim()
    let splitStr = trimStr.split(" ")
    return splitStr.reduce((acc,curEl) => (curEl.length > acc.length ? curEl : acc))
}

console.log(findLongString(" Collection Of Long Strings but Better And Interesting "));
