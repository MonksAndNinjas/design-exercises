// Add the following functions to see what they do:
console.log(
  "Now rendering - " +
  //"followMouse() => draws circles that follow mouse movement"
  //"interactiveColorBoxes() => boxes with colors in it"
  "colorSpectrum() => displays color range in a rectangle"
);

var stepX;
var stepY;

// variables to add to the canvas before drawing begins
function setup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100);
}

// repeats draw function
function draw() {
  colorSpectrum();
}
