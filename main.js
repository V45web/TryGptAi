const i = document.getElementById('image')
const button = document.getElementById('submit')

function beep() {
const sound = new Audio('chickensound.mp3')
sound.loop = true;
sound.play()
}

button.addEventListener('click', () => {
  i.src = '1785261855281.webp'
  beep()
  button.disabled = true
})

