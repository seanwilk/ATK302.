var myState = 0 ;
var timer = 0 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      background("red");
      text("hello world", 100, 100);
      timer++ ;
      if (timer > 200){
        myState = 1 ;
        timer = 0 ;
      }


      break;

    case 1:
      background("green");
      textSize(100, 100);
      text("hola world", 100, 100);
      break;

    case 2:
      background("grey");
      textSize(50, 50);
      text("bonjour world", 100, 100);
      break;

    case 3:
      background("blue");
      text("guten tag world", 100, 100);
      break;

    case 4:
      break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 4) {
    myState = 0;
  }

}
