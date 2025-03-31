/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

//console.log("Welcome to the bootcamp

    // What’s Wrong?
    
    // Program B
    // Description:
    // This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.
    
    let number = [2, 4, "eight"];
    for (let i = 0; i < number.length; i++) {
      let doubled = number[i] * 2;
      console.log(doubled);
    }
    
    // What’s Wrong?
    
    
    // Program C (Logic Error)
    // Description:
    // This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.
    
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return true;  // Supposed to indicate num is NOT prime
        }
      }
      return false; // Supposed to indicate num IS prime
    }
    
    console.log(isPrime(7)); // Expected true but gets false
    
    // What’s Wrong?
    
    //Ans- Programs and Solutions
    
    
     // Program A
    // Description:
    // This program is intended to display a simple prompt in the console but fails to run.
    
    //console.log("Welcome to the bootcamp
    
    // What’s Wrong?
    
    //The issue is:
    //console.log("Welcome to the bootcamp
    //The string that starts with "Welcome to the bootcamp is missing its closing quote ("), which causes a syntax error.
    // A syntax error occurs when the JavaScript engine encounters something that doesn't follow the rules of the JavaScript language.
    //Debugging Technique:
            //The debugging technique I am using here is reading the error message which is indicating that its closing quote ("), is missing. To debug this, we can look at the line where the //error is occurring and verify if all strings are properly closed with quotation marks. By carefully reading error messages provided by JavaScript, we can quickly locate and correct //syntax errors.
    
    //Proposed Fix that addresses the error:
    //To fix this syntax error, we  add a closing quotation mark (") at the end of the string, like this:
    console.log("Welcome to the bootcamp");
    //Fixed Code:
    console.log("Welcome to the bootcamp");
    //Verification:
    //Now, when we run the code, it executes without errors and display the following message in the console:
    //Welcome to the bootcamp
    //This solution addresses the syntax error and ensures the program runs as intended.
    
    
    // Program B
    // Description:
    // This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.
    
    
    // What’s Wrong?
    /*The problem here is a runtime error. The code attempts let numbers = [2, 4, "eight"];
    for (let i = 0; i < numbers.length; i++) {
      let doubled = numbers[i] * 2;
      console.log(doubled);
    }
    to multiply each element in the numbers array by 2. However, one of the elements in the array is a string ("eight"), which will cause an issue when we  try to multiply it by a number.
    Error Type:
    •	Runtime error – When the program is running, JavaScript tries to multiply the string "eight" by 2. JavaScript can't perform arithmetic operations with a string that doesn't represent a number (like "eight"), so it results in a runtime error.
    Debugging Technique:
    •	By using the console.log , we can observe that ( the array numbers = [2, 4, "eight"] and note that multiplying the string "eight" by 2 will lead to a NaN (Not-a-Number) result.
    •	The error can be fixed by ensuring that only valid numbers are being multiplied.
    Proposed Fix:
    To fix this, we need to make sure that each element in the array is a valid number before attempting the multiplication. 
    we can use the isNaN() function to check if the element is a valid number or not.
     Fixing the Code:
   */
     let numbers = [2, 4, "eight"];
    for (let i = 0; i < numbers.length; i++) {
      // Check if the current element is a valid number before performing the multiplication
      if (!isNaN(numbers[i])) {
        let doubled = numbers[i] * 2;
        console.log(doubled);
      } else {
        console.log(`${numbers[i]} is not a valid number.`);
      }
    }
    //Explanation of the Fix:
    ////The isNaN(numbers[i]) function checks if the value is not a valid number. If it's not a number, it prints a message saying it's not valid; otherwise, it perform the multiplication.
    //Verification
    //After running the code,
    //Output is showing that the code multiply each number in an array by 2 and display the results. So the code is working as intended.
    
    
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // Program C (Logic Error)
    // Description:
    // This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.
    
    function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return true;  // Supposed to indicate num is NOT prime
        }
      }
      return false; // Supposed to indicate num IS prime
    }
    
    console.log(isPrime(7)); // Expected true but gets false
    
    // What’s Wrong?
    /* 
    //The issue in the program is a logic error. The function isPrime(num) is supposed to check if a given number is prime, but the logic for determining whether the number is prime or not is incorrect.
    •	The function currently returns true if a divisor is found (i.e., num % i === 0), but it should return false in that case (because the number is divisible by something other than 1 and itself).
    •	If no divisor is found, it should return true (indicating the number is prime), but the function is returning false instead.
    Error Type:
    •	Logic error – The logic of how prime numbers are determined is incorrect, leading to incorrect results.
    Debugging Technique:
    •	Reading through the code and testing it with a known prime number (like 7) should show that it returns false when it should return true.
    •	By carefully analyzing the return values inside the loop, we can see that the program is returning the wrong value when a divisor is found.
    Proposed Fix:
    We need to adjust the logic for determining whether a number is prime:
    1.	When the number is divisible by i, it should return false because it's not prime.
    2.	If no divisor is found after looping through all numbers, return true because the number is prime.
    */
            //Corrected Code:
    function isPrime(num) {
      if (num < 2) return false;  // Numbers less than 2 are not prime
      for (let i = 2; i <= Math.sqrt(num); i++) {  // Only loop up to the square root of the number
        if (num % i === 0) {
          return false;  // num is divisible by i, so it's not prime
        }
      }
      return true;  // num is prime if no divisors are found
    }
    
    console.log(isPrime(7)); // Expected true
    console.log(isPrime(4)); // Expected false
    /*       
    Explanation of Fix:
    •	I  updated the condition inside the loop to return false if the number is divisible by i (i.e., not a prime number).
     Also modified the loop to only go up to the square root of the number (Math.sqrt(num)) because if a number is divisible by a number larger than its square root, the corresponding smaller divisor has already been checked.
    •	It return true at the end if no divisors were found, indicating that the number is prime.
    Verification:
    After running the r fixed code, the expected output comes as;
    true
    false
    This indicates that the function is correctly identifying whether a number is prime.
    
    ---------------------------------------------------------------------------------------------------------------
    Reflection:
               question-  Think about which debugging methods you found most useful and how you might apply them in future projects.
    Ans- The debugging method  I found most useful is  isolating and testing  the logic in small steps  (like testing with specific numbers and examining the return values) .That way of debugging  is actually very helpful in identifying the error.
     In future projects, I’ll continue using console.log() to debug and test functions step-by-step, especially when the logic appears to be correct at a glance but produces unexpected results.
    
    
    */
    
    