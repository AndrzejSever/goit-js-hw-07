function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBackground  = document.body
const spanBackground = document.querySelector('.color')
const buttonBackground = document.querySelector('.change-color')

buttonBackground.addEventListener("click", backgroundColorStyle)

function backgroundColorStyle() {
   const colorBady = getRandomHexColor()
    changeBackground.style.backgroundColor = colorBady
    spanBackground.textContent = colorBady
}


