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
