var need;
var act;
var act1;

function preload() {
  // put preload code here
  need = loadImage('./assets/stage.jpg');
  act = loadImage('./assets/actor.png');
  act1 = loadImage('./assets/actor2.png');
  crowd = loadImage('./assets/crowd.png');;
}

var mic;
// var balls;
function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn()
  mic.start();
  // balls = new ball();
  // push.balls;
}

function draw() {
  background(0);
  micLevel = mic.getLevel();
   this.x = width
   this.y = height
  image(need, 0,0, windowWidth, windowHeight);
  image(act1,width/6*2, height/4, act1.width,act1.height);
  image(act, width/6*2, height/4, act.width,act.height);
 image(crowd , 0, constrain(height-micLevel*height*3, 0, height), windowWidth, crowd.height*1.2);


  // if( micLevel > 0,1){
  //   image(act, width/6*2, height/4, act.width,act.height);
  // } else{
  //   image(act1,width/6*2, height/4, act1.width,act1.height);
  // }



  // for (var i = 0; i < balls.length; i++) {
  //   balls[i].show();
    // balls[i].update();
  // }
}

// function ball() {
//   this.x = width / 2;
//   this.y = height / 2;
//   this.speed = 1;
//
//   this.show = function() {
//     image(bal, this.x, this.y, 40, 100);
//   }
//   // this.update = function(){
//   //   this.x -= this.speed;
//   // }
//
// }
