const canvas = document.getElementById('canvas')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let size = 25
let isPressed = false
let color = 'black'
let x = undefined
let y = undefined

canvas.addEventListener('mousedown', (e) => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  isPressed = false
  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x1 = e.offsetX
    const y1 = e.offsetY
    drawCircle(x1, y1)
    drawLine(x, y, x1, y1)

    x = x1
    y = y1
  }
})

drawCircle = (x, y) => {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

drawLine = (x, y, x1, y1) => {
  ctx.beginPath()
  ctx.moveTo(x, y)
  ctx.lineTo(x1, y1)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

incrementBtn.addEventListener('click', () => {
  size += 3
  if (size > 50) size = 50
  updateSizeOnScreen()
})

decrementBtn.addEventListener('click', () => {
  size -= 3
  if (size < 5) size = 5
  updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
  color = e.target.value
  console.log(color)
})

clearEl.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

updateSizeOnScreen = () => {
  sizeEl.innerText = size
}
