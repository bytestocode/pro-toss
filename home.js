const titles = document.querySelectorAll(".text-title");
const contents = document.querySelectorAll(".text-content");
const upImgs = document.querySelectorAll(".img--up");
const opacityImg = document.querySelector(".img--opacity");
const articleWidth = document.querySelector(".article--width");
const widthImg = document.querySelector(".img--width");

window.addEventListener("scroll", function () {
  for (const title of titles) {
    if (isScrollTo(title)) moveUp(title);
  }
  for (const img of upImgs) {
    if (isScrollTo(img)) moveUp(img);
  }
  for (const content of contents) {
    if (isScrollTo(content)) moveUp(content);
  }
  if (isScrollTo(opacityImg)) fadeIn(opacityImg);
  if (isScrollToTightly(widthImg)) {
    let cropWidth = 400 + 0.5 * (calcTop(widthImg) - window.innerHeight);
    articleWidth.style.left = cropWidth + "px";
    widthImg.style.width = `calc(100vw - ${cropWidth * 2}px)`;
  }
});

function isScrollTo(element) {
  return 100 + calcTop(element) - window.innerHeight < 0;
}

function isScrollToTightly(element) {
  return calcTop(element) - window.innerHeight < 0;
}

function calcTop(element) {
  console.log(`${element.tagName}: ${element.getBoundingClientRect().top}`);
  return element.getBoundingClientRect().top;
}

function moveUp(element) {
  fadeIn(element);
  element.style.transform = "translateY(0px)";
}

function fadeIn(element) {
  element.style.opacity = "1.0";
}
