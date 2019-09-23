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
