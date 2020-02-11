var x = 0 ;

function setup() {
  // put setup code here
  createCanvas (800, 800) ;
}

function draw() {
  // put drawing code here
  background ('grey');
  //rect (x, 200, 100, 100,);
  textSize (40) ;
  text ("Parasite", x, 100) ;
  x = x + 5 ;
  if (x > width) {
    x = 0 ;
  }
}
