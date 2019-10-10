/*
//global variables
var count = 0;
var tileCountX = 10;
var tileCountY = 10;
var tileWidth = 0;
var tileHeight = 0;

var colorStep = 15;

var circleCount = 0;
var endSize = 0;
var endOffset = 0;

var actRandomSeed = 0;
*/

function modulesInGridSetup() {
  createCanvas(800, 800);
  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
  noFill();
  stroke(0, 128);
}

function modulesInGrid() {
  background(255);
  randomSeed(actRandomSeed);

  translate(tileWidth / 2, tileHeight / 2);

  // The mouse position defines circleCount in a module, the size of the circles, and the offset of the last circle
  circleCount = mouseX / 30 + 1;
  endSize = map(mouseX, 0, max(width, mouseX), tileWidth / 2, 0);
  endOffset = map(mouseY, 0, max(height, mouseY), 0, (tileWidth - endSize) / 2);

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {
      // The varying rotation of the modules is easier to manage when, before drawing a module, the origin of the coordinate system
      // is temporarily moved to the position where it will be drawn. The command push() ensures that the current state of the coordinate system is saved before the origin is moved using translate()
      push();
      translate(tileWidth * gridX, tileHeight * gridY);
      scale(1, tileHeight / tileWidth);

      // The random number toggle decides between the four rotation directions. random(0, 4) generates a number between 0 and 3.999;
      // so, rounded off, the values 0,1,2, and 3. The radian angle HALF_PI is a rotation of 90deg
      var toggle = int(random(0, 4));
      if (toggle == 0) rotate(-HALF_PI);
      if (toggle == 1) rotate(0);
      if (toggle == 2) rotate(HALF_PI);
      if (toggle == 3) rotate(PI);

      // draw module
      for (var i = 0; i < circleCount; i++) {
        // The module is constructed by drawing the circles in succession.
        // The value of diameter ranges between tileWidth and the previously calculated endSize. The value offset comprosis the shift from the center.
        // The circles become smaller and smaller, thereby shifting farther and farther to the right
        var diameter = map(i, 0, circleCount, tileWidth, endSize);
        var offset = map(i, 0, circleCount, 0, endOffset);
        ellipse(offset, 0, diameter, diameter);
      }
      pop();  // Finally, the previously saved state of the coordinate system is restored using pop()
    }
  }
}

function modulesInGridMousePressed() {
  actRandomSeed = random(100000);
}

/*
Mouse: Position x: Number and size of circles
       Position y: Position of circles
       Left click: New random value for positions
Keys:  S: Save image
*/
