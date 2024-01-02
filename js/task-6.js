//  <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>

const controls = document.querySelector("#controls");
const num = document.querySelector("input");
const btnCreate = controls.querySelector("button[data-create]");
const btnDestroy = controls.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  let amount = num.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  let wid = 30;
  let hig = 30;
  let a = 1;
  destroyBoxes();

  const fragment = document.createDocumentFragment();

  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      if (i > 0) {
        wid += 10;
        hig += 10;
        a += 1;
      }
      let item = document.createElement("div");
      item.style.width = wid + "px";
      item.style.height = hig + "px";
      item.textContent = a;
      item.style.textAlign = "center";

      item.style.backgroundColor = getRandomHexColor();
      fragment.appendChild(item);
    }
    boxes.appendChild(fragment);
  }
  num.value = "";
}

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
