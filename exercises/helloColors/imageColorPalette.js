/*
global variables:
  var img;
  var colors = [];
  var sortMode = null;
*/


function imageColorPalettePreload() {
  // load before program runs
  img = loadImage("https://raw.githubusercontent.com/generative-design/Code-Package-p5.js/master/01_P/P_1_2_2_01/data/pic1.jpg");
}


function imageColorPaletteSetup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function imageColorPalette() {
  var tileCount = floor(width / max(mouseX, 5)); // number of rows and columns in the grid depends on the x-value of mouse, then select larger number
  var rectSize = width / tileCount;              // calculates grid resolution

  img.loadPixels(); // gives us access to image pixels
  colors = [];
  // image is scanned line by line and pixels stored in pixels[], px and py corresponds to index i
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }
  }

  gd.sortColors(colors, sortMode);
  // image is redrawn pixel by pixel
  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}


function imageColorPaletteKeyReleased() {
  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

/*
Mouse: Position x: Resolution
Keys: 5-9: Change sort mode
      S: Save image
      C: Save ASE pallete
*/
