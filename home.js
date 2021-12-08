const titles = document.querySelectorAll(".text-title");
const contents = document.querySelectorAll(".text-content");
const popupImgs = document.querySelectorAll(".popup");

window.addEventListener("scroll", function () {
  for (const title of titles) {
    if (isPoint(title)) popup(title);
  }
  for (const img of popupImgs) {
    if (isPoint(img)) popup(img);
  }
  for (const content of contents) {
    if (isPoint(content)) popup(content);
  }
});

function isPoint(element) {
  return calcTop(element) - window.innerHeight < 0;
}

function calcTop(element) {
  console.log(`${element.tagName}: ${element.getBoundingClientRect().top}`);
  return element.getBoundingClientRect().top;
}

function popup(element) {
  element.style.opacity = "1.0";
  element.style.transform = "translateY(0px)";
}
