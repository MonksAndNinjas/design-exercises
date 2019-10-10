// Add the following functions to see what they do:
console.log(
  "Now rendering - " +
  //"followMouse() => draws circles that follow mouse movement"
  //"interactiveColorBoxes() => boxes with colors in it"
  //"rectangleColorSpectrum() => displays color range in a rectangle"
  //"circleColorSpectrum() => displays color range in a circle"
  //"colorPalletes() => create color groups in every gradiation"
  //"imagePalletes() -> create color groups from a given image"
  //"ruleColorPalletes() => create color groups with specific color nuances"
  //"rprColorPalette() => creates random tiling of color palette"
  //"overlappingColorPalete() => creates slightly transparent and overlapping color palette"
  //"halfDrawnColorPalette() => just like overlappingColorPalete() except half of tiles are drawn"
  //"shapes() => create exotic shapes"
  //"gridAligntment() => diagonal with only two possible directions used to create complex structure"
  //"colorGridAlignment() => adds color and transparency to gridAlignment()"
  //"numberGridAlignment() => changes number, color, and strokeWeight of diagonal lines"
  //"movementInGrid() => creates circles that are randomly added to create tension and movement"
  //"shiftingBlackCircles() => circles are situated behind a dense grid of white circles"
  //"colorTransparentCircles() => color variations and transparent circles"
  //"cornerShifted() => Only the corners of the elements are shited here, not the elements themselves"
  "modulesInGrid() => nesting of several forms into a complex module"
);

//global variables
var count = 0;
var tileCountX = 10;
var tileCountY = 10;
var tileWidth = 0;
var tileHeight = 0;

var colorStep = 15;

var circleCount = 0;
var endSize = 0;
var endOffset = 0;

var actRandomSeed = 0;

function preload() {
}

// variables to add to the canvas before drawing begins
function setup() {
  modulesInGridSetup();
}

// repeats draw function
function draw() {
  modulesInGrid();
}

function mousePressed() {
  modulesInGridMousePressed();
}

function mouseReleased() {
}

function keyPressed() {
  // if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
  // if (key == 'c' || key == 'C') writeFile([gd.ase.enode(colors)], gd.timestamp(), 'ase'); // to save a Adobe Swatch Exchange
  // if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
}
