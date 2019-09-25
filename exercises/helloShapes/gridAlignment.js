/*
global variables:
  var tileCount = 20;  // value defies the grid resolution
  var actRandomSeed = 0;

  var actStrokeCap;
*/

function gridAlignmentSetup() {
  createCanvas(600, 600);

  actStrokeCap = ROUND;
}

function gridAlignment() {
  clear();
  strokeCap(actStrokeCap);

  randomSeed(actRandomSeed);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
       // creates random number between 0.0000 and 1.999, then converts to int which is then used as a toggle
      var toggle = int(random(0, 2));

      // ------ toggle action -------
      if (toggle == 0) {
        strokeWeight(mouseX / 20);
        line(posX, posY, posX + width / tileCount, posY + height / tileCount);
      }
      // value of current mouse pos on the x-axes defines the stroke value of line A
      // it is then divided by 20 to not let it get too large
      if (toggle == 1) {
        strokeWeight(mouseY / 20);
        line(posX, posY + width / tileCount, posX + height / tileCount, posY);
      }
    }
  }
}

function gridAlignmentMousePressed() {
  actRandomSeed = random(100000);
}

function gridAlignmentKeyReleased() {
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
