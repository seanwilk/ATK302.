var mic;
var vol;
var y = 0 ;


function setup() {
  createCanvas(800, 800);

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background('#ABD9FF');

  push();
  translate(y, 0);
  //your avatar code


  fill('#663D00');
  rect(100, 350, 30, 40);

  fill('#2B8000')
  triangle(30, 350, 115, 250, 200, 350);

  fill('#2B8000')
  triangle(45, 300, 112, 225, 180, 300);

  fill('#2B8000')
  triangle(60, 250, 112, 200, 160, 250);

  textSize (40) ;
  text ("Tree", 100, 100) ;

  pop() ;

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 3) {
    // do something
    y++ ;

  }


  textSize(18);
  text("Click the screen first.  My volume is " + vol, 80, 600);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
