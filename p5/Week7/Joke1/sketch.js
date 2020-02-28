var myState = 0 ;
var windpic ;


function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  windpic = loadImage("assets/wind.jpg");
}

function draw() {
  // put drawing code here

switch(myState){
  case 0:
  background("grey") ;
  textSize(40, 40);
  text("Renewable energy?", 100, 100) ;
  break ;

  case 1:
  background("100") ;
  text("I'm a big fan", 100, 100);
  image(windpic, 50, 300, 400, 300);
  textSize(40, 40);
  break;



}

}

function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }

}
