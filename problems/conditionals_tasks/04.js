/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const myScore = 69;
const myFriendScore = 85;

if (myScore > 80) {
  if (myFriendScore > 80) {
    console.log("Go For a Lunch");
  } else if (myFriendScore > 60 && myFriendScore < 80) {
    console.log("Good luck next time!");
  } else if (myFriendScore > 40 && myFriendScore < 60) {
    console.log("");
  } else {
    console.log("Block Friend");
  }
} else {
  console.log("Go home and sleep, act sad.");
}