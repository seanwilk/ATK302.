var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800) ;
}

function draw() {
  // put drawing code here

switch(myState){
  case 0:
  background("red") ;
  text("hello world", 100, 100) ;
  break ;

  case 1:
  background("green") ;
  text("hola world", 100, 100);
  break;



}

}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 4) {
    myState = 0 ;
  }

}
