//! TODO: Write a fucntion to check if a given string starts with a specific substring.

//? Constraints :

//? str: A string (e.g., "Hello world").
//? subStr: A substring to check if it starts the given string (e.g., "Hello").
//? Output: true if the given string starts with the specified substring, otherwise false.

//* method one

const startsWithWord = (str,word) => {
    let strArr = str.split(" ")
    if(strArr[0] === word) return true
    return false
}

console.log(startsWithWord("rabi anando sarkar","Rabi"));

//* method two 

const startsWithThis = (str,substr) => {
    return str.startsWith(substr)
}

console.log(startsWithThis("rabi anando sarkar","rabi"));