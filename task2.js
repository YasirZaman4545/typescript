"use strict";
// Scenario 1: Sum numbers
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(23, 45));
// Scenario 2: Check Even or Odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(checkEvenOrOdd(44));
// Scenario 3: Calculate Area
function calculateArea(width, height) {
    return width * height;
}
console.log(calculateArea(24, 56));
// Scenario 4: String Reversal
function reverseString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
console.log(reverseString("Yasir Afridi"));
// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(56));
