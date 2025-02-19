/*
Add or remove elements
  1. Declare an array of 3 tourist destinations
  2. Add a new tourist destination to your tourist array
  3. Add two more to your array
  4. Remove the last tourist destination you have added
  5. display the final array as output
*/

const touristPlace = ["Cox's Bazar", "Canada", "Australia"];

touristPlace.push("India");

touristPlace.push("London", "Bangkok");

touristPlace.pop();

console.log(touristPlace);
