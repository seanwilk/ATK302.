function setup() {
  // put setup code here
  createCanvas(1000, 700) ;
  //rectMode(CENTER) ;
}

function draw() {
  // put drawing code here
  background('#ABD9FF') ;
  //stuff we always want to show

  if (mouseIsPressed) {
    //stuff that shows when mouse is pressed
    fill(250, 0, 0)
    ellipse(500, 350, 400, 400);

    fill(250, 0, 0)
    triangle(674, 254, 762, 235, 687, 284)


   } else {
     //stuff that happens when mouse isnt pressed
     noStroke()

     fill(250)
     ellipse(150, 100, 75, 75)

     fill(250)
     ellipse(200, 100, 75, 75)

     fill(250)
     ellipse(175, 135, 75, 75)

     fill(250)
     ellipse(225, 135, 75, 75)


     fill(250)
     ellipse(400, 100, 85, 85)

     fill(250)
     ellipse(450, 100, 75, 75)

     fill(250)
     ellipse(425, 135, 95, 95)

     fill(250)
     ellipse(475, 135, 75, 75)

     fill(250)
     ellipse(475, 135, 75, 75)


     fill(0)
     rect(0, 600, 1000, 100);

     fill(130)
     rect(789, 200, 200, 400);

     fill(0)
     rect(877, 535, 30, 65);

     fill(0)
     rect(805, 470, 50, 50);

     fill(0)
     rect(865, 470, 50, 50);

     fill(0)
     rect(925, 470, 50, 50);

     fill(0)
     rect(805, 400, 50, 50);

     fill(0)
     rect(865, 400, 50, 50);

     fill(0)
     rect(925, 400, 50, 50);

     fill(0)
     rect(805, 330, 50, 50);

     fill(0)
     rect(865, 330, 50, 50);

     fill(0)
     rect(925, 330, 50, 50);

     fill(0)
     rect(805, 260, 50, 50);

     fill(0)
     rect(865, 260, 50, 50);

     fill(0)
     rect(925, 260, 50, 50);

     fill(250)
     rect(925, 650, 50, 10);

     fill(250)
     rect(800, 650, 50, 10);

     fill(250)
     rect(675, 650, 50, 10);

     fill(250)
     rect(550, 650, 50, 10);

     fill(250)
     rect(425, 650, 50, 10);

     fill(250)
     rect(300, 650, 50, 10);

     fill(250)
     rect(175, 650, 50, 10);

     fill(250)
     rect(50, 650, 50, 10);

     fill(130)
     rect(50, 500, 10, 100);

     fill(250, 250, 0)
     triangle(25, 499, 55, 452, 82, 499);

     fill(250, 250, 0)
     ellipse(850, 100, 75, 75)
   }

   fill(25) ;
   textSize(20) ;
      text(mouseX.toFixed(1) + "," + mouseY, 40,40 )

}


//do not put inside draw
function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
