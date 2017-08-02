// pobieranie elementu canvas
const canvas = document.querySelector('canvas');
// przypisanie okntekstu graficznego
const ctx = canvas.getContext('2d');

// nadajemy canvas
canvas.height = 600;
canvas.width = 800;

// przypisanie rozmiaru do krotszych zmiennych
const cw = canvas.width;
const ch = canvas.height;

// definiujemy pilke
const ballSize = 20;
let ballX = cw / 2 - ballSize / 2;  // (800 / 2) - (20 / 2) = 400 - 10 = 390
let ballY = ch / 2 - ballSize / 2;  // (600 / 2) - (20 / 2) = 300 - 10 = 290

// paletki gracza i komputera - rozmiary
const paddelHeight = 10;  // wysokosc rakietki gracza i komputera
const paddelWidth = 100;  // szerokosc rakietki gracza i komputera

// players paddel position
let playerX = 350; // paddel position on x line (from right)
let aiX = 350;  // paddel position on x line (from left)

// paddel position on line y
const playerY = 500;  // paddel position on Y line
const aiY = 100;  // paddel position on Y line

// line in the middle of court
const lineWidth = 15;  // middle line width
const lineHeight = 5;  // middle line height

// bal speed
let ballSpeedX = 2;
let ballSpeedY = 2;

function player() {
  ctx.fillStyle = 'red';
  ctx.fillRect(playerX, playerY,paddelWidth,paddelHeight);
}

function ai() {
  ctx.fillStyle = 'green';
  ctx.fillRect(aiX, aiY, paddelWidth, paddelHeight);
}

function ball() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(ballX, ballY, ballSize, ballSize);

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if( ballY <= 0 || ballY + ballSize >= ch) {
    ballSpeedY = -ballSpeedY;
  }
  if( ballX <= 0 || ballX + ballSize >= cw) {
    ballSpeedX = -ballSpeedX;
  }
}
// drawing table
function table() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,cw,ch);
// middle line of table
  ctx.fillStyle = 'purple';
  ctx.fillRect(0, 300, 800,1);
}

topCanvas = canvas.offsetTop;
console.log(topCanvas);

function playerPosition(e) {
// console.log('Pozycja myszy to ' + (e.clientY - topCanvas));
playerX = e.clientX - topCanvas + paddelWidth / 2;

if(playerX >= cw - paddelWidth) {
  playerX = cw - paddelWidth
}

if(playerX <= 0) {
  playerX = 0;
}

}

canvas.addEventListener('mousemove', playerPosition);
// main funtion

function gameInit() {
  table()
  ball()
  player()
  ai()
}

setInterval(gameInit, 1000 / 60);
