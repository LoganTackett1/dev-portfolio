import $ from "jquery";
import css from "./index.css";
import { FOUR } from "./tesseract";

const canvas = document.getElementById("tesseract");
const canvasSize = Math.min(window.innerWidth, window.innerHeight);
canvas.width = canvasSize;
canvas.height = canvasSize;

window.addEventListener("resize", () => {
  const min = Math.min(window.innerWidth, window.innerHeight);
  canvas.width = min;
  canvas.height = min;
});

const ctx = canvas.getContext("2d");

const Tesseract = FOUR.create4DCube();
let wAngle = 0;
const wDelta = 0.003;

function amountscrolled() {
  const winheight = $(window).height();
  const docheight = $(document).height();
  const scrollTop = $(window).scrollTop();
  const trackLength = docheight - winheight;
  const pctScrolled = scrollTop / trackLength;
  return pctScrolled;
}

const navBar = document.getElementById("navbar");
let currPercScroll = amountscrolled();
let camAngle = currPercScroll * -Math.PI;
window.addEventListener("scroll", () => {
  const navY = navBar.getBoundingClientRect().y;
  if (navY <= 10) {
    navBar.classList.add("sticky-true");
  } else {
    navBar.classList.remove("sticky-true");
  }

  currPercScroll = amountscrolled();
  camAngle = currPercScroll * -Math.PI;
});

const navBarBtn = document.getElementById("navbar-button");
const navContainer = document.getElementById("navbar-container");
navBarBtn.addEventListener("click", () => {
  navContainer.classList.toggle("nav-off");
  navBarBtn.classList.toggle("nav-off");
});

setInterval(() => {
  FOUR.update3DMap(Tesseract, wAngle, 3);
  const matrix = FOUR.getCenteringMatrix([
    0,
    Math.cos(camAngle),
    Math.sin(camAngle),
  ]);
  FOUR.update2DMap(Tesseract, matrix, 3.7);
  FOUR.drawCube(ctx, canvas, Tesseract);
  wAngle += wDelta;
}, 16);
