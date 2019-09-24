function interactiveColorBoxes() {
  /*  setup() parameters:
      createCanvas(720, 720);
      noCursor();

      colorMode(HSB, 360, 100, 100);
            colorMode() allows users to change the way color value is interpreted
            HSB specifies the color model, and the three values specify their range
      rectMode(CENTER);
      noStroke();  */

   // y-value divided by 2 to get values form 0 to 360 on the color wheel
  background(mouseY / 2, 100, 100);
  // halved y-value subtracted from 360, creates values from 360 to 0
  fill(360 - mouseY / 2, 100, 100);
  // size of the color value manipulated by mouse-x value,
  // side length between 1 and 720 pixels
  rect(360, 360, mouseX + 1, mouseX + 1);

  /* Mouse: Position x: Size of rectangle
            Position y: Hue
     Keys:  S: Save Image
  */
}

function rectangleColorSpectrum() {
  /*  global variables:
      var stepX;
      var stepY;

      setup() parameters:
      createCanvas(800, 400);
      noStroke();
      colorMode(HSB, width, height, 100); Hue is not defined between 0 and 360, but 0 and 800
  */

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

  // Mouse: Position x/y: Grid resolution
}

function circleColorSpectrum() {
  /* global variables:
     var segmentCount = 360;
     var radius = 300;

     setup() parameters:
     createCanvas(800, 800);
     noStroke();
  */

  colorMode(HSB, 360, width, height);
  background(360, 0, height);

  // angle increment depends on how many segments are to be drawn
  var angleStep = 360 / segmentCount;

  beginShape(TRIANGLE_FAN);
  vertex(width / 2, height / 2);  // placed in the middle of the canvas

  for (var angle = 0; angle <= 360; angle += angleStep) {
    // convert angle from degrees to radians
    var vx = width / 2 + cos(radians(angle)) * radius;
    var vy = height / 2 + sin(radians(angle)) * radius;
    // fill color for next segment defined below in fill()
    vertex(vx, vy);
    fill(angle, mouseX, mouseY);
  }
  // end construction of shape
  endShape();

  /* Add to keyPressed() changes size of circle and it's color values

  switch (key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
  }

  Mouse: Position x: Saturation
        Position y: Brightness

  Keys: 1-5: Segment Count */
}

function colorPalletes() {
  /*global variables
  var tileCountX = 2;
  var tileCountY = 10;

  var colorsLeft = [];
  var colorsRight = [];
  var colors = [];

  var interpolateShortest = true;

  setup():
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  shakeColors();*/

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

  /*
  keyPressed():
  if (key == 'c' || key == 'C') 123454332121212112writeFile([gd.ase.encode(colros)], gd.timestampe(), 'ase');
  if (key == '1') interpolateShortest = true;
  if (key == '2') interpolateShortest = false;
  */
}

// part of colorPalletes()
// called in mousePressed()
function shakeColors() {
  for (var i = 0; i < tileCountY; i++) {
    colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
    colorsRight[i] = color(random(160, 190), 100, random(0, 100));
  }
}