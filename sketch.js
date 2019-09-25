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
  "gridAligntment() => diagonal with only two possible directions used to create complex structure"
);

//global variables
var tileCount = 20;  // value defies the grid resolution
var actRandomSeed = 0;

var actStrokeCap;

function preload() {
}

// variables to add to the canvas before drawing begins
function setup() {
  gridAlignmentSetup();
}

// repeats draw function
function draw() {
  gridAlignment();
}

function mousePressed() {
  gridAlignmentMousePressed();
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

  gridAlignmentKeyReleased();
}
