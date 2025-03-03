// Variable Store\
let randomColor = document.getElementById('random-bg');
let mainBody = document.getElementById('main_body');
let realTimeDate = document.getElementById('real_time_date');

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
  return `${dayName}, <br> <p class="text-[18px]; font-semibold">${monthName} ${date} ${year}</p>`;
}
realTimeDate.innerHTML = todayDate();