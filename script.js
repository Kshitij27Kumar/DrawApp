const canvas = document.getElementById('canvas')
const incrementBtn = document.getElementById('increment')
const decrementBtn = document.getElementById('decrement')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let size = 35
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
    drawLine(x1, y1)
    drawCircle(x1, y1)
    x = x1
    y = y1
  }
})

drawCircle = (x, y) => {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, MATH * PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}
