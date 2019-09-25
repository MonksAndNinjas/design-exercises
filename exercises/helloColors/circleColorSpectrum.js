/*
global variables:
  var segmentCount = 360;
  var radius = 300;
*/

function circleColorSpectrumSetup() {
  createCanvas(800, 800);
  noStroke();
}

function circleColorSpectrum() {
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
}

function circleColorSpectrumKeyPressed() {
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

/*
Mouse: Position x: Saturation
      Position y: Brightness

Keys: 1-5: Segment Count
 */
