// Add the following functions to see what they do:
console.log(
  "Now rendering - " +
  //"followMouse() => draws circles that follow mouse movement"
  //"interactiveColorBoxes() => boxes with colors in it"
  //"rectangleColorSpectrum() => displays color range in a rectangle"
  //"circleColorSpectrum() => displays color range in a circle"
  "colorPalletes() => create color groups in every gradiation"
);

//global variables
var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var interpolateShortest = true;

// variables to add to the canvas before drawing begins
function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

// repeats draw function
function draw() {
  colorPalletes();
}


function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image12
}
