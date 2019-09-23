// Add the following functions to see what they do:
console.log(
  "Now rendering - " +
  //"followMouse() => draws circles that follow mouse movement"
  "interactiveColorBoxes() => boxes with colors in it"
);

// variables to add to the canvas before drawing begins
function setup() {
  createCanvas(720, 720);
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();
}

// repeats draw function
function draw() {
  interactiveColorBoxes();
}
