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
  "shapes() => create exotic shapes"
);

//global variables

function preload() {
}

// variables to add to the canvas before drawing begins
function setup() {
  colorPolygonsSetup();
}

// repeats draw function
function draw() {
  colorPolygons();
}

function mouseReleased() {
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
//  if (key == 'c' || key == 'C') writeFile([gd.ase.enode(colors)], gd.timestamp(), 'ase'); // to save a Adobe Swatch Exchange
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
}

function keyReleased() {
  colorPolygonsKeyReleased();
}
