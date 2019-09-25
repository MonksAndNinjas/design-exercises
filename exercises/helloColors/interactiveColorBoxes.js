
function interactiveColorBoxesSetup() {
  createCanvas(720, 720);
  noCursor();

  colorMode(HSB, 360, 100, 100);  // HSB specifies the color model, and the three values specify their range
  colorMode(); //allows users to change the way color value is interpreted
  rectMode(CENTER);
  noStroke();
}

function interactiveColorBoxes() {
  // y-value divided by 2 to get values form 0 to 360 on the color wheel
  background(mouseY / 2, 100, 100);
  // halved y-value subtracted from 360, creates values from 360 to 0
  fill(360 - mouseY / 2, 100, 100);
  // size of the color value manipulated by mouse-x value,
  // side length between 1 and 720 pixels
  rect(360, 360, mouseX + 1, mouseX + 1);
}

/*
  Mouse: Position x: Size of rectangle
  Position y: Hue
  Keys:  S: Save Image
*/
