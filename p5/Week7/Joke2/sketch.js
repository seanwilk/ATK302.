var myState = 0 ;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;

}

function draw() {
  // put drawing code here

switch (myState){
  case 0:
  background("grey") ;
  textSize(40, 40);
  text("What is the difference between an old,", 50, 100) ;
  textSize(40, 40);
  text("run down bus terminal,", 50, 150) ;
  textSize(40, 40);
  text("and a lobster with big breasts?", 50, 200) ;
  timer++;
  if (timer > 400) {
    timer = 0;
    myState = 1;
  }
  break ;

  case 1:
  background("grey") ;
  text("One is a crusty bus station,", 50, 100);
  textSize(40, 40);
  text("the other is a busty crustacean!", 50, 150);
  textSize(40, 40);
  timer++;
  if (timer > 400) {
    timer = 3;
    myState = 0;
  }
  break;
}
}
