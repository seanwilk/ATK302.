var song1, song2, song3;
var myState = 0;

function preload() {
  song1 = loadSound('assets/thrill.mp3');
  song2 = loadSound('assets/donkey.mp3');
  song3 = loadSound('assets/skate.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 48, 123);
  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function draw() {

  switch (myState) {
    case 0:
      text("hi", 100, 100);
      song1.play();
      myState = 1
      break;
    case 1:
      text("Thriller", 100, 100);

      break;
    case 2:
      text("hi", 100, 100);
      song2.play();
      myState = 3
      break;
    case 3:
      text("donkey", 100, 100);
      break;
    case 4:
      text("hi", 100, 100);
      song3.play();
      myState = 5
      break;
    case 5:
      text("skate", 100, 100);
      break;
  }
}

function mouseReleased() {
  myState++;
  song1.pause();
  song2.pause();
  song3.pause();
}

function touchStarted() {
  getAudioContext().resume();
}
