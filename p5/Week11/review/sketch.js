var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER) ;
  ellipseMode(CENTER) ;
}

function draw() {
  // put drawing code here
  noStroke();
  background("grey");
  rect(x, 50, 50, 50);
  ellipse(x - 20, 75, 25, 25);
  ellipse(x + 20, 75, 25, 25);
  x = x + 5 ;

  if (x > width) {
    x = 0 ;
  }
}
