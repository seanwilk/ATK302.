var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(1000, 700);
}

function draw() {
  // put drawing code here
  background("blue");


  push() ;
  translate(x, 0) ;
  avatar();
  pop() ;

  x+= 5 ;
  if (x > width) {
    x = -500 ;
  }

}





function avatar() {
  noStroke()

  //person 2


  fill(250)
  ellipse(470, 480, 45, 45);

  fill(0)
  ellipse(460, 473, 5, 5)

  fill(0)
  ellipse(475, 473, 5, 5)

  fill(0)
  rect(493, 513, 20, 10);

  fill(0)
  rect(440, 513, 20, 10);

  fill(0)
  rect(450, 500, 45, 60);

  fill(0)
  rect(449, 550, 10, 50);

  fill(0)
  rect(485, 550, 10, 50);

  fill(0)
  rect(460, 489, 15, 2);

  fill(250)
  ellipse(515, 419, 120, 60);

  fill(250)
  triangle(502, 448, 497, 464, 542, 445);

  fill(0)
  textSize(40);
  textFont("bangers");
  text('hey!', 485, 430);



}
