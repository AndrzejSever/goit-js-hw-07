const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const container = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const counter = document.querySelector('input[type="number"]');
buttonCreate.addEventListener("click", eventFunction);

function eventFunction() {
  if (counter.value <= 100 && counter.value > 0) {
    createBoxes(counter.value);
  }

  counter.value = null;
}

function createBoxes(num) {
  container.innerHTML = "";
  const marking = [];

  while (num > 0) {
    marking.push("<div class='square'></div>");
    num -= 1;
  }

  console.log(marking);
  container.insertAdjacentHTML("beforeend", marking.join(""));

  const colorWay = document.querySelectorAll(".square");
  const backColor = [...colorWay];

  backColor.map((el, index) => {
    el.style.backgroundColor = getRandomHexColor();
    const x = 30 + index * 10;
    el.style.width = x.toString() + "px";
    el.style.height = x.toString() + "px";
  });
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
}

counter.classList.add("counter");
buttonCreate.classList.add("btm-create");
buttonDestroy.classList.add("btm-destroy");
