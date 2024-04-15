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

function createBoxes() {
  container.innerHTML = "";
  const marking = [];

  for (let i = 0; counter.value > 0; i += 1) {
    const backgroundColor = getRandomHexColor();
    const size = 30 + i * 10;
    marking.push(
      `<div class='square' style = "background-color:${backgroundColor}; width:${size}px; height:${size}px;"></div>`
    );
    counter.value -= 1;
  }

  console.log(marking);
  container.insertAdjacentHTML("beforeend", marking.join(""));
}

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  container.innerHTML = "";
}

counter.classList.add("counter");
buttonCreate.classList.add("btm-create");
buttonDestroy.classList.add("btm-destroy");
