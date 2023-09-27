const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const para = document.getElementById("para");
const images = document.querySelectorAll(".img");
const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const redBg = document.querySelector(".redBg");
const burger_top = document.querySelector(".burger_top");
const tomato = document.querySelector(".tomato");
const lattice = document.querySelector(".lattice");
const cheeze = document.querySelector(".cheeze");
const nonveg = document.querySelector(".nonveg");
let status = false;

function load() {
  h1.style.left = "9.5%";
  h2.style.left = "10%";
  para.style.left = "10%";
  images.forEach((img) => {
    img.style.right = "10%";
  });
  btn.style.transform = "scale(1)";
}

btn.addEventListener("click", () => {
  h1.style.left = "-40%";
  h2.style.left = "-40%";
  para.style.left = "-50%";
  redBg.style.left = "-15%";
  redBg.style.transform = "rotate(0)";
  images.forEach((img) => {
    img.style.right = "50%";
    img.style.transform = "translateX(50%)";
  });
});

btn1.addEventListener("click", () => {
  images.forEach((img) => {
    img.style.transitionProperty = "top";
    img.style.transitionDuration = "1s";
  });
  burger_top.style.top = "5%";
  tomato.style.top = "21%";
  lattice.style.top = "27%";
  cheeze.style.top = "43%";
  nonveg.style.top = "50%";
});
