var button = document.querySelector('#button')
const parag = document.querySelector('#parag ')
var nbutton = document.querySelector('#nbutton')
var resetButton = document.querySelector('#resetButton')
button.onclick = () => {
  parag.textContent = parseInt(parag.textContent) + 1
}

nbutton.onclick = () => {
  parag.textContent = parseInt(parag.textContent) - 1
}

resetButton.onclick = () => {
  parag.textContent = 0
}
