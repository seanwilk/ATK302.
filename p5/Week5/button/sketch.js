function setup() {
  // put setup code here
  createCanvas(800, 800) ;
  background("green") ;
}

function draw() {
  // put drawing code here
  rect(100, 100, 100, 100) ;
  text("Hey", 150, 150);
}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
  background(random(256), random(256), random(256)) ;
}

}
