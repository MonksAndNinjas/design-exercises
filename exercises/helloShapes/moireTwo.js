/*
global variables:
var shapes = [];
var minRadius = 5;
var maxRadius = 250;
var density = 5;
*/

function moireTwoSetup() {
  createCanvas(800, 800);
  noFill();

  shapes.push(new Shape(width / 2, height / 2, width));
}

function moireTwo() {
  background(255);

  shapes.forEach(function(shape) {
    shape.draw();
  });
}

function Shape(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;

  Shape.prototype.draw = function () {
    for (var i = 0; i < this.r; i += density) {
      ellipse(this.x, this.y, i);
    }
  };
}

function moireTwoMouseReleased() {
  shapes.push(new Shape(mouseX, mouseY, random(minRadius, maxRadius)));
}

// use keyPressed 'S' for save
