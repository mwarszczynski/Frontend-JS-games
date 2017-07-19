const canv = document.querySelector('canvas');
const ctx = canv.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

function table() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cw, ch);
}

table();
