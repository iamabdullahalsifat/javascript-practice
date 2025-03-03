// Variable Store\
let randomColor = document.getElementById('random-bg');
let mainBody = document.getElementById('main_body');

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
