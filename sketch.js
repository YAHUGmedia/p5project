let angle = 1;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0, 0, 0);

  rotateX(angle);
  rotateY(angle * 0.5);
  rotateZ(angle * 0.25);
  fill(255, 0, 150);
  box(300);
}

angle += 0.05;