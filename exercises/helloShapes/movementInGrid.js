/*
//global variables
var tileCount = 20;
var actRandomSeed = 0;

var circleAlpha = 130;
var circleColor;*/

function movementInGridSetup() {
  createCanvas(600, 600);
  noFill();
  circleColor = color(0, 0, 0, circleAlpha);
}

function movementInGrid() {
  // The origin of the coordinate system is shifted by half a tile width and height to the right and down so the circles are located in the center of their tiles.
  translate(width / tileCount / 2, height / tileCount / 2);

  background(255);

  randomSeed(actRandomSeed);

  stroke(circleColor);
  strokeWeight(mouseY / 60);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX = random(-mouseX, mouseX) / 20; // The higher the x value of the mouse position mouseX, the grater the range of values for the random numbers
      var shiftY = random(-mouseX, mouseX) / 20;

      // Adding the values shiftX and shiftY to the grid coordinates posX and posY results in the final shifted positions of the circles.
      ellipse(posX + shiftX, posY + shiftY, mouseY / 15, mouseY / 15);
    }
  }
}

function movementInGridMousePressed() {
  actRandomSeed = random(100000);
}

// Mouse: Position x: Circle position
        //Position y: Circle size
        //Left click: New random values of circle position
// Keys: S: Save image
