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
);

//global variables

function preload() {
}

// variables to add to the canvas before drawing begins
function setup() {
}

// repeats draw function
function draw() {

}

function mouseReleased() {
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
  if (key == 'c' || key == 'C') writeFile([gd.ase.enode(colors)], gd.timestamp(), 'ase'); // to save a Adobe Swatch Exchange
}

function keyReleased() {
}
