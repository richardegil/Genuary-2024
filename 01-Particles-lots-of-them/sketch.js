// ------------------------------
// UTILITIES
// ------------------------------
let maxCanvas;
let cnv = [];
let numColumns = 10;
let numRows = 10;
let numberOfParticles = 10000;
let framePadding;
let sizeOfCell;
let gridPositions;
// ------------------------------
// COLORS
// ------------------------------
let palette;
let initialColor;
// ------------------------------
// NOISE
// ------------------------------
let resolution = 0.003;
let resolution2 = 0.03;

function setup() {
  pixelDensity(2);
  maxCanvas = min(windowWidth, windowHeight);
  createCanvas(maxCanvas, maxCanvas);
  colorMode(HSB, 360, 100, 100, 100);
  framePadding = width  * 0.1;
  sizeOfCell = (width - framePadding * 2) / numColumns;
  gridPositions = buildGrid();
}

function draw() {
  noLoop();
  palette = 2;
  initialColor = floor(random(5));
  let backgroundColor = getColor(palette, initialColor);
  background(h, s, b);
  ellipseMode(CENTER);

  for (let i = 0; i < numberOfParticles; i++) {
    push();
    let x = floor(random(width));
    let y = floor(random(height));
    n3 = noise(x * resolution, y * resolution) - 0.033;
    palette = 2;
    initialColor = floor(random(5));
    getColor(palette, initialColor);
    noStroke();
    fill(h, s, b, 100);
    ellipse(x * n3, y, width * 0.005, height * 0.005);
    pop();
  }
}

function keyPressed() {
  if (key === 's') {
    save(`reg_genuary_01_.png`);
  }
}
