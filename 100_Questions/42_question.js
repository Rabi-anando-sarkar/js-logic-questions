//! TODO: Valid Credit card number or not

//* Luhn Algorithm Steps:
//* Steps of the Luhn Algorithm
//* Prepare the Number:
//* Start with the digits of the number. For example, if validating the number 79927398713.
//* Reverse the Digits:
//* Reverse the digits of the number. For the example, it becomes 31789379297.
//* Double Every Second Digit:
//* Starting from the first digit, double every second digit.
//* For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//* Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9. 
//* Subtract 9 from Numbers Higher Than 9:
//* If doubling the number results in a number greater than 9, subtract 9 from it.
//* Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//* Sum All Digits:
//* Add all the digits together.
//* 3+2+7+7+9+6+7+9+2+5+9 = 66.
//* Check Modulo 10:
//* If the sum modulo 10 is 0, then the number is valid according to the Luhn formula. 10/66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

const validateCreditCard = (str) => {

    str = str.replace(/\D/g, "");

    // reverse the str

    let reverseStr = ""
    for(let i=str.length-1; i>=0; i--) {
        reverseStr+=str[i]
    }
    
    // double every second digit

    let doubleNum = reverseStr.split('').map((curDigit,index) => {
        if(index%2 !== 0) {
            curDigit*=2
            if(curDigit > 9) {
                curDigit = curDigit - 9
            } else {
                curDigit = curDigit;
            }
        }
        return curDigit
    }).reduce((acc,curEl) => acc + Number(curEl), 0)
    
    return doubleNum % 10 == 0
}

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));