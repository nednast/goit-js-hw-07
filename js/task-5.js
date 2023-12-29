//<div class="widget">
//<p>
//Background color: <span class="color">-</span>
//</p>
//<button type="button" class="change-color">
//Change color
//</button>
//</div>;

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
  widget.style.backgroundColor = getRandomHexColor();
  texte.textContent = getRandomHexColor();
}
