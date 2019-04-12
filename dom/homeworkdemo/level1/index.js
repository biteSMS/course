var body = document.querySelector('body')
body.insertAdjacentHTML('beforeend', `<button class="left">向左</button>
<button class="right">向右</button>
<button class="top1">向上</button>
<button class="down">向下</button>
<button class="big">放大</button>
<button class="small">缩小</button>
<div class="square"></div>`)

var left = document.querySelector('.left')
var right = document.querySelector('.right')
var top1 = document.querySelector('.top1')
var down = document.querySelector('.down')
var big = document.querySelector('.big')
var small = document.querySelector('.small')
var square = document.querySelector('.square')

square.style.left = 0
square.style.top = 0
square.style.width = '100px'
square.style.height = '100px'
left.addEventListener('click', function () {
    square.style.left = parseInt(square.style.left) - 100 + 'px'
})
right.addEventListener('click', function () {
    square.style.left = parseInt(square.style.left) + 100 + 'px'
})
down.addEventListener('click', function () {
    square.style.top = parseInt(square.style.top) + 100 + 'px'
})
top1.addEventListener('click', function () {
    square.style.top = parseInt(square.style.top) - 100 + 'px'
})
big.addEventListener('click', function () {
    square.style.width = parseInt(square.style.width) + 30 + 'px'
    square.style.height = parseInt(square.style.height) + 30 + 'px'
    square.style.left = parseInt(square.style.left) - 15 + 'px'
    square.style.top = parseInt(square.style.top) - 15 + 'px'
})
small.addEventListener('click', function () {
    square.style.width = parseInt(square.style.width) - 30 + 'px'
    square.style.height = parseInt(square.style.height) - 30 + 'px'
    square.style.left = parseInt(square.style.left) + 15 + 'px'
    square.style.top = parseInt(square.style.top) + 15 + 'px'
})