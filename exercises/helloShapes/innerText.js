/*
global variables:
var video;
var slider;
var cols = 40;
var rows = 40;
var boxes;
var boxHolder;
*/

function innerTextPreload() {
  video = createVideo("https://raw.githubusercontent.com/generative-design/Code-Package-p5.js/master/01_P/P_2_1_4_02/data/ball.mov");
}

function innerTextSetup() {
  noCanvas();
  pixelDensity(1);

  boxHolder = createDiv('');
  boxHolder.id('mirror');

  boxes = [];

  video.size(cols, rows);
  // slider threshold at 200
  slider = createSlider(0, 255, 200);

  for (var y = 0; y < rows; y++) {
    for (var x = 0; x < cols; x++) {
      var box = createCheckbox();
      box.style('display', 'inline');
      box.parent('mirror');
      boxes.push(box);
    }
    var linebreak = createSpan('<br/>');
    linebreak.parent('mirror');
  }
  // play the video in a loop
  video.loop();
}

function innerText() {
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      // get the video pixel location
      var index = (x + (y * video.height)) * 4;
      var r = video.pixels[index];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r + g + b) / 3;

      var threshold = slider.value();

      var checkIndex = x + y * cols;

      if (bright > threshold - 1) {
        boxes[checkIndex].checked(false);
      } else {
        boxes[checkIndex].checked(true);
      }
    }
  }
}
