/*
global variables:
  var stepX;
  var stepY;
*/

function rectangleColorSpectrumSetup() {
  createCanvas(800, 400);
  noStroke();
  colorMode(HSB, width, height, 100); // Hue is not defined between 0 and 360, but 0 and 800
}

function rectangleColorSpectrum() {

  // steps added by 2 to prevent them from being too small, which causes longer display times
  stepX = mouseX + 2;
  stepY = mouseY + 2;

  // with the help of two nested loops, we make sure all positions in the grid will now be processed.
  // gridX and gridY used to position tile and set color
  for (var gridY = 0; gridY < height; gridY += stepY) {
    for (var gridX = 0; gridX < width; gridX += stepX) {
      fill(gridX, height - gridY, 100);
      rect(gridX, gridY, stepX, stepY);
    }
  }
}

// Mouse: Position x/y: Grid resolution
