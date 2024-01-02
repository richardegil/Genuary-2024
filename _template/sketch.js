// ------------------------------
// UTILITIES
// ------------------------------
let maxCanvas;
let cnv = [];
let numColumns = 10;
let numRows = 10;
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
  palette = floor(random(palettes.length));
  initialColor = floor(random(5));
  let backgroundColor = getColor(palette, initialColor);
  background(h, s, b);
  rectMode(CENTER);

  for (let i = 0; i < gridPositions.length; i+=2) {
    push();
    let gridX = gridPositions[i];
    let gridY = gridPositions[i + 1];
    translate(gridX, gridY);
    n1 = noise(gridX * resolution, gridY * resolution) + 0.033;
    col = Math.max(floor(map(n1, 0.3, 0.7, 0, 4)), 0);
    palette = floor(random(palettes.length));
    initialColor = floor(random(5));
    let currentColor = getColor(palette, col);
    noStroke();
    fill(h, s, b);
    rect(0, 0, sizeOfCell * 0.8);
    pop();
  }

  for (q = 0; q < 100000000; q++) {}
}
