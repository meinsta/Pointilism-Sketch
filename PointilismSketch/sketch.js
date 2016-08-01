var capture;
var smallPoint, largePoint;
var input;
var analyzer;
function setup() {
  createCanvas(720, 400);
  mic = new p5.AudioIn();
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  mic.start();
  smallPoint = 5;
  largePoint = 100;
  imageMode(CENTER);
  noStroke();
  background(255);
  capture.loadPixels();
  capture.hide();
}
function draw() {
  var vol = mic.getLevel()*2500;
  for(var i=0; i < 100; i++){
    var pointillize = map(vol, 0, windowWidth, smallPoint, largePoint);
    var x = floor(random(capture.width));
    var y = floor(random(capture.height));
    var pix = capture.get(x, y);
    fill(pix, 128);
    ellipse(x, y, pointillize, pointillize);
  }
}
