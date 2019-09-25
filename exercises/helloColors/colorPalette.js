/*
global variables
  var tileCountX = 2;
  var tileCountY = 10;

  var colorsLeft = [];
  var colorsRight = [];
  var colors = [];

  var interpolateShortest = true;

*/

function colorPaletteSetup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();
}

function colorPalette() {
  tileCountX = int(map(mouseX, 0, width, 2, 100)); // number of color gradiations determined by mouse pos
  tileCountY = int(map(mouseY, 0, height, 2, 10)); // number of rows determined by mouse pos
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;
  var interCol;
  colors = [];
  // draw the grid row by row
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    // colors for the left and right coluns are set in these arrays
    var col1 = colorsLeft[gridY];
    var col2 = colorsRight[gridY];

    for (var gridX = 0; gridX < tileCountX; gridX++) {
      var amount = map(gridX, 0, tileCountX - 1, 0, 1);

      if (interpolateShortest) {
        // swith to rgb
        colorMode(RGB);
        interCol = lerpColor(col1, col2, amount); // determines intermediary color
        // switch back
        colorMode(HSB);
      } else {
        interCol = lerpColor(col1, col2, amount);
      }

      fill(interCol);

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;
      rect(posX, posY, tileWidth, tileHeight);

      // save color for potential ase export
      colors.push(interCol);
    }
  }
}

// called in mousePressed()
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}

function colorPaletteKeyPressed() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colros)], gd.timestampe(), 'ase');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
}
