/*
Checking if it's an Array
Instructions:
  1. Create different variables, each containing either an array or a non-array value.
  2. Now use isArray to check if each variable is an array.
  3. Print a message to the console indicating whether each variable is an array or not.
*/

const isYesArray = [10, 20, 30];
const isNotArray = "[10, 20, 30]";

console.log(Array.isArray(isYesArray));
console.log(Array.isArray(isNotArray));