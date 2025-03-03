// Variable Store\
let randomColor = document.getElementById('random-bg');
let mainBody = document.getElementById('main_body');
let realTimeDate = document.getElementById('real_time_date');
let historyList = document.getElementById('history_list');
let clearHistory = document.getElementById('clear_history');
let completedBtn = document.querySelectorAll('.completed_button');
let incrementNumber = document.getElementById('increment_number');
let decrementNumber = document.getElementById('decrement_number');
let btnCount = 0;

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
// Completed Button
for (let button of completedBtn){
  button.addEventListener('click', (event) => {
    alert('Board Updated Successfully');
    incrementNumber.innerText = parseInt(incrementNumber.innerText) + 1;
    decrementNumber.innerText = parseInt(decrementNumber.innerText) - 1;
    if(!button.disabled){
      button.disabled = true;
      button.style.opacity = "0.5";
      btnCount++;
    }
    if (btnCount === completedBtn.length) {
      alert("All tasks completed!");
    };
    let historyStore = event.target;
    let box = historyStore.closest('.box');
    let boxFrist = box.querySelector('.box-first');
    let title = boxFrist.querySelector("h2").innerText;
    let p = document.createElement("p");
    p.innerHTML = `<p style="background-color: #ffffff; font-size: 14px; padding: 8px 15px; border-radius: 16px;">You have Complete The Task ${title}</p>`
    historyList.appendChild(p);
  });
}
// History Remove
clearHistory.addEventListener('click', () => {
  historyList.innerHTML = " ";
})