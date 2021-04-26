function validateCreditCard(creditCardNum) {
    const creditNumString = creditCardNum.toString();
    // Bonus 1: remove dashes from input string
    const creditNumArray = [];
    for (j = 0; j < creditNumString.length; j++) {
        if (creditNumString[j] === "-") {
            continue;
        };
        creditNumArray.push(creditNumString[j]);
    };
    // commented out for Bonus 1, next line was used to solve the first basic task
    // const creditNumArray = creditNumString.split("");
    console.log(creditNumArray); // Helper log
    // check if all digits are numbers
    if (isNaN(creditNumArray.join(""))) {
        return false;
    };
    // check if number has 16 digits
    if (creditNumArray.length !== 16) {
        return false;
    };
    // check if last digit is even
    if (creditNumArray[creditNumArray.length - 1] % 2 !== 0) {
        return false;
    };
    let sum = 0;
    for (i = 0; i < creditNumArray.length ; i++) {
        sum += parseInt(creditNumArray[i]);
        
    };
    // check if sum of all digits is great than 16
    if (!(sum > 16)) {
        return false;
    };
    // check that not all digits are the same
    // not sure if this would work every time
    if (sum / 16 === parseInt(creditNumArray[0])) {
        return false;
    };
    return true;
    
};


console.log(validateCreditCard("6666-6666-6666-1666"));

/**** tests *****/
// console.log(validateCreditCard('9999-7777-8888-0000')); //{ valid: true, number: '9999-7777-8888-0000' }
// console.log(validateCreditCard('6666-6666-6666-1666')); //{ valid: true, number: '6666-6666-6666-1666' }
// console.log(validateCreditCard('a923-3211-9c01-1112')); //{ valid: false,number: 'a923-3211-9c01-1112',error: '_invalid characters_' }
// console.log(validateCreditCard('4444-4444-4444-4444')); //{ valid: false,number: '4444-4444-4444-4444',error: '_only one type of number_' }
// console.log(validateCreditCard('1211-1111-1111-1112')); //{ valid: true, number: '1211-1111-1111-1112' }




