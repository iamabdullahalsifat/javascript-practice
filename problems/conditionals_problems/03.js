/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// Simple Switch Use....
let myGrade = "F";
let score;

switch(myGrade) {
  case "A":
    score = "A: 90-100";
    break;
  case "B":
    score = "B: 80-89";
    break;
  case "C":
    score = "C: 70-79";
    break;
  case "D":
    score = "D: 60-69";
    break;
  case "F":
    score = "F: 0-59";
    break;
}
console.log(score);

// If Else Use ....
let yourScore = 122;
let yourGrade;

if (yourScore >= 90 && yourScore <= 100) {
  yourGrade = "A";
} else if (yourScore >= 80 && yourScore <= 89) {
  yourGrade = "B";
} else if (yourScore >= 70 && yourScore <= 79) {
  yourGrade = "C";
} else if (yourScore >= 60 && yourScore <= 69) {
  yourGrade = "D";
} else if (yourScore >= 0 && yourScore <= 59) {
  yourGrade = "F";
} else {
  yourGrade = "Wrong Score!"
}
console.log(yourGrade);