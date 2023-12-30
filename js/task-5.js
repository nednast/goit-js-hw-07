//<div class="widget">
//<p>
//Background color: <span class="color">-</span>
//</p>
//<button type="button" class="change-color">
//Change color
//</button>
//</div>;
const body = document.querySelector("body");
const widget = document.querySelector(".widget");
const btn = widget.querySelector(".change-color");
const texte = widget.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener("click", onBtnHandler);
function onBtnHandler() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  texte.textContent = color;
}
