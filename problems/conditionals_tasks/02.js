/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let yourWeight = 70;
let yourHeight = 1.6;

let yourBmi = yourWeight / (yourHeight * yourHeight);
console.log(yourBmi.toFixed(1));

if (yourBmi < 18.5) {
  console.log("You Are Underweight");
} else {
  if (yourBmi >= 18.5 && yourBmi <= 24.9) {
    console.log("You Are Normal");
  } else {
    if (yourBmi >= 25 && yourBmi <= 29.9) {
      console.log("You Are Overweight");
    } else {
      console.log("you are obese.");
    }
  }
}