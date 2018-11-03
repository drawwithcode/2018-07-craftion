
var need
var bal
function preload(){
  // put preload code here
  need = loadImage('./assets/needle.png');
  bal = loadImage('./assets/balloon.png');
}

var mic;

function setup(){
  createCanvas(windowWidth,windowHeight);
  mic = new p5.AudioIn()
  mic.start();

}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);

  image(need, width/6, constrain(height-micLevel*height*5, 0, height),need.width, need.height);
  push();
  
  image(bal, frameCount, height/2 ,40, 100);
  pop();
}
