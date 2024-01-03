// header
const headerHeight = document.querySelector("header").offsetHeight;

const header = document.querySelector("header");

let scrollTop = 0;
window.addEventListener("scroll", () => {
  scrollTop = window.pageYOffset;
  scrollTop >= headerHeight
    ? header.classList.add("fix")
    : header.classList.remove("fix");
});

const logo = document.querySelector("header>.innerbox>h1>a");
logo.addEventListener("click", (e) => {
  e.preventDefault();
});

const text = document.querySelector(".font");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "성장을 멈추지 않는";
  }, 3000);
};

textLoad();
setInterval(textLoad, 3000);
