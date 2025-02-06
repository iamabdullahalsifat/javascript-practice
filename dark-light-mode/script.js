let darkModeBtn = document.querySelector(".dark__mode");
let lightModeBtn = document.querySelector(".light__mode");
let body = document.body;

darkModeBtn.addEventListener("click", () => {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
});

lightModeBtn.addEventListener("click", () => {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
});