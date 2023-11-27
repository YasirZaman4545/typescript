// Scenario 1: Sum numbers

function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  console.log(add(23,45));
  
  // Scenario 2: Check Even or Odd
  
  function checkEvenOrOdd(number: number): string {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  console.log(checkEvenOrOdd(44));
  
  // Scenario 3: Calculate Area
  
  function calculateArea(width: number, height: number): number {
    return width * height;
  }
  
  console.log(calculateArea(24,56));
  
  // Scenario 4: String Reversal
  
  function reverseString(str: string): string {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }

  console.log(reverseString("Yasir Afridi"));
  
  
  // Scenario 5: Temperature Conversion
  
  function convertCelsiusToFahrenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }
  
console.log(convertCelsiusToFahrenheit(56));
