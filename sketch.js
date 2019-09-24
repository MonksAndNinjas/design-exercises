// Add the following functions to see what they do:
console.log(
  "Now rendering - " +
  //"followMouse() => draws circles that follow mouse movement"
  //"interactiveColorBoxes() => boxes with colors in it"
  //"rectangleColorSpectrum() => displays color range in a rectangle"
  //"circleColorSpectrum() => displays color range in a circle"
  //"colorPalletes() => create color groups in every gradiation"
  "imagePalletes() -> create color groups from a given image"
);

//global variables
var img;
var colors = [];
var sortMode = null;

function preload() {
img = loadImage("https://raw.githubusercontent.com/generative-design/Code-Package-p5.js/master/01_P/P_1_2_2_01/data/pic1.jpg");
}

// variables to add to the canvas before drawing begins
function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

// repeats draw function
function draw() {
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }
  //gd.ortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function mouseReleased() {

}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png'); // saves image
  if (key == 'c' || key == 'C') writeFile([gd.ase.enode(colors)], gd.timestamp(), 'ase');
}

function keyReleased() {
  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
