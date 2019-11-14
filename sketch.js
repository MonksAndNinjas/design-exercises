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
  //"modulesInGrid() => nesting of several forms into a complex module"
  //"checkBoxes() => working with visual design elements"
  //"innerText() => working with innerText element"
  //"sliders() => creates shape using sliders"
  //"sliders2() => another sliders image"
  //"moire() => unexpected optical illusions"
  //"moireTwo() => another unexpected optical illusion"
  //"moireThree() => optical illusion three"
  "moireFour() => another illusion"
);

//global variables
var shapes = [];
var density = 2.5;
var shapeHeight = 64;
var shapeColor;
var smoothness = 0;

var newShape;

function preload() {
}

// variables to add to the canvas before drawing begins
function setup() {
  moireFourSetup();
}

// repeats draw function
function draw() {
  moireFour();
}

function mousePressed() {
  moireFourMousePressed();
}

function mouseReleased() {
  moireFourMouseReleased();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
  // if (key == 'c' || key == 'C') writeFile([gd.ase.enode(colors)], gd.timestamp(), 'ase'); // to save a Adobe Swatch Exchange
  // if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  moireFourKeyPressed();
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
}
