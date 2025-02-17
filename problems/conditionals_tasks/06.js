/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 30;
let isStudent = true;

let mariyam;

if (age <= 10) {
  mariyam = 0;
} else if (age >= 60) {
  mariyam = 800 * (85/100);
} else if (isStudent) {
  mariyam = 800 * (50/100);
} else {
  mariyam = 800;
}

console.log(mariyam);