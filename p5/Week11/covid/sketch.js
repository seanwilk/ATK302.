var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here

  background("grey");

  push() ;
  translate(x, 0);
  makeCovid();
  x = x + 5;
  if (x > width) {
    x = -100
  }
  pop() ;
}

function makeCovid() {
  rect(50, 50, 50, 50);
  ellipse(35, 75, 25, 25);
  ellipse(65, 75, 25, 25);

}
