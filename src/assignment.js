// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/
function sumOfNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;

   // in an array of size n  
    function sum(arr) {  
        let sum = 0; // initialize sum  
    
        // Iterate through all elements  
        // and add them to sum  
        for (let i = 0; i < arr.length; i++)  
            sum += arr[i];  
    
        return sum;  
    }  
    // Driver code 
    let arr = [12, 3, 4, 15];
    document.write("Sum of given array is " + sum(arr));
      
}
// assignment.sumOfNumbers = sumOfNumbers;

*/
 
function countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
  unction countEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.length;
 function countEvenNumbers(arrayOfNumbers) {
    let count = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
// assignment.countEvenNumbers = countEvenNumbers;

/**
 * Challenge - 3
 * 
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 * If you did Challenge - 3, remove the comment in the line just after this function
 * 
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 * 
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
function celsiusToFahrenheit(arrayOfNumbers) {
    return arrayOfNumbers;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

