var bunnyPic;
var bunnyPic2;
var bunnyPic3;
var myfont;
var song1;

function preload(){
  song1 = loadSound("assets/BGFancy.mp3");
}

function setup() {
  // put setup code here
  createCanvas(1000, 800);
  bunnyPic = loadImage("assets/bunny.jpg");
  bunnyPic2 = loadImage("assets/bunny2.jpg");
  bunnyPic3 = loadImage("assets/bunny3.jpg");
  myfont = loadFont("assets/myfont.ttf");
  song1.play();
}

function draw() {
  // put drawing code here
  background(100);
  image(bunnyPic, 0, 0) ;
  image(bunnyPic2, 250, 0,);
  image(bunnyPic3, 600, 0,);
  textFont(myfont, 45) ;
  text("bunnies wearing objects", 400, 500) ;

}

function touchStarted() {
  getAudioContext().resume();
}
