var myState = 0;
var timer = 0;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  //yellow rect
  background("#66C8FF")
  fill("yellow");
  rect(width / 2, height / 2, 150, 400);

  rect(40, 100, 700, 20);
  rect(400, 145, 20, 110);



  switch (myState) {
    case 0:
      fill("grey");
      ellipse(width / 2, height / 2, 100, 100);
      fill(255, 0, 0);
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill("grey");
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 400) {
        timer = 0;
        myState = 1;
      }
      break;

    case 1:
      fill("grey");
      ellipse(width / 2, height / 2, 100, 100);
      fill("grey");
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill("green");
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 2;
      }
      break;

      case 2:
      fill("yellow");
      ellipse(width / 2, height / 2, 100, 100);
      fill("grey");
      ellipse(width / 2, height / 2 - 110, 100, 100);
      fill("grey");
      ellipse(width / 2, height / 2 + 110, 100, 100);
      timer++;
      if (timer > 200) {
        timer = 0;
        myState = 0;
      }
      break;


  }

}
