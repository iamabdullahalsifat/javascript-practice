/*
What will be the result of the following codes:

var a = isNaN(‘11’);

var a = isNaN(2-10);

Explain your answers.
*/

//  ----------- (Answer) ----------- //

// isNaN() is a javascript function, It's checks whether a value is Not-a-Number (NaN).

const a = isNaN("11");
console.log(a); //Output: false
// Since 11 is a number, the output will be false.

const b = isNaN(2-10);
console.log(b); //Output: false
// Since [(2-10) = 8] is a number, the output will be false.