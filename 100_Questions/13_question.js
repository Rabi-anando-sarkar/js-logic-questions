//!  Write a function that takes a string as input and returns the count f vowels in the string.consider 'a','e','i','o'and 'u' as vowels (bith lowercase and uppercase)

//? Constraints

//? The input string may conatin letters in the both uppercase and lowercase
//? The output shoulf be a non-negetive integer represendting the count of vowels in the input string

//* method one 

const countVowels = (str) => {
    let count = 0
    let lCaseIt = str.toLowerCase()
    for(let i = 0;i <= lCaseIt.length - 1; i++){
        if(lCaseIt[i] === 'a' || lCaseIt[i] === 'e' ||  lCaseIt[i] === 'i' || lCaseIt[i] === 'o' || lCaseIt[i] === 'u') {
            count++
        }
    }
    return count
}

console.log(countVowels('aesjhvh'));

//* method two

const countVs = (str) => {
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);
    return matches ? matches.length : 0
}

console.log(countVs('aesjhvh'));

//* method three

const cVowels = (str) => {
    let vowels = ['a','e','i','o','u']
    let arr = str.split('')
    let count = 0
    for (const char of arr) {
        if(vowels.includes(char.toLowerCase())) count++
    }

    return count++
}

console.log(cVowels('aesjhvh'));