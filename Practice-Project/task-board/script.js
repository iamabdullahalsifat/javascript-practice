// Variable Store\
let randomColor = document.getElementById('random-bg');
let mainBody = document.getElementById('main_body');
let realTimeDate = document.getElementById('real_time_date');
let historyList = document.getElementById('history_list');
let clearHistory = document.getElementById('clear_history');

// Random Color
function randomColorCreate(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`
}
randomColor.addEventListener('click', () => {
  mainBody.style.backgroundColor = randomColorCreate();
})
// Discover
document.getElementById('discoverNew').addEventListener('click', () => {
  window.location.href = "./task-board/blog";
})
// Real Time Date
function todayDate(){
  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let d = new Date();
  let dayName = day[d.getDay()];
  let monthName = month[d.getMonth()];
  let date = d.getDate();
  let year = d.getFullYear();
  return `<p style="font-size: 20px;">${dayName} ,</p> <p style="font-size: 20px; font-weight: 600">${monthName} ${date} ${year}</p>`;
}
realTimeDate.innerHTML = todayDate();
// History Remove
clearHistory.addEventListener('click', () => {
  historyList.innerHTML = " ";
})