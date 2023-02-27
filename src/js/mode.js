const darkModeBtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");

const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFromLocal) {
  body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeFromLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
