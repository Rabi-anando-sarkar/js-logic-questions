//! TODO: Write a palindrome function

const isPalindrome = (str) => {

    //? .replace(/\W/g,""): Uses the replace(  method with a egulare expression (/\W/g) to remove all non-word characters from the string
    let word = str.toLowerCase().replace(/\W/g,"")

    let reverseStr = word.split("").reverse().join("")
    return reverseStr === word ? true : false
}

console.log(isPalindrome("na , m a ,n"));