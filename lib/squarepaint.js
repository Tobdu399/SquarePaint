let canvas;
let keyboard;

function setup() {
  canvas   = createCanvas(500, 500);
  keyboard = new Keyboard();
}

function draw() {
  keyboard.update();

  updateDisplay();
  updateBrush();
  drawStrokes();
  updatePointer();
}