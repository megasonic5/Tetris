let lastTime = 0;

const pantalla = document.getElementById('Tetris');
const contexto = canvas.getContext("2d");

function draw() {
  context.fillStyle = "#000"
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function main(time = 0) {
  const deltaTime = lastTime - time;
  draw();
  requestAnimationFrame(main);
}
