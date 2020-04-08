var cars = [];
var frogPos;
var myState = 0;
var maxCars = 10;
var maxTimer = 12 + 850;
var timer = maxTimer;
var covid;
var mask;
var scary;
var adventure;
var bit;
var y = 0;

function preload() {
  bit = loadSound("assets/8bit.mp3");
}


function setup() {
  // put setup code here
  createCanvas(1200, 800);

  bit.play();
  covid = loadImage("assets/covid.png");
  mask = loadImage("assets/mask.png");
  scary = loadFont("assets/scary.TTF");
  adventure = loadFont("assets/Adventure.otf");


  //spawn cars
  for (var i = 0; i < maxCars; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(600, height - 100);

  textAlign(CENTER);

}

function draw() {
  // put drawing code here

  switch (myState) {

    case 0: //menu

      background("red");
      image(covid, 40, y, 100, 100);
      image(covid, 1000, y, 100, 100);

      textFont(scary);
      textSize(40);
      text("COVID-19", 600, 150)
      textSize(24);
      text("is rapidly taking over the world!", 600, 200);
      text("Use your facemask to wipe out the virus", 600, 350);
      textSize(30);
      text("before the world ends!", 600, 400);
      image(mask, 550, 450, 100, 100);
      textSize(24);
      text("Click Screen to Begin, and use the arrow keys to move!", 600, 650);
      y = y + 5;
      if (y > height) {
        y = -100;
      }

      break;

    case 1: //game State
      game();

      timer = timer - 1;
      if (timer <= 0) {
        timer = maxTimer;
        myState = 3;
      }

      break;

    case 2: //win

      background("lightBlue");
      fill("black");
      textFont(adventure);
      textSize(40);
      text("You've eradicated COVID-19!", 600, 400);
      text("You saved humainty!", 600, 450);
      text("Nice one!", 600, 500);
      text("To play again, click the screen", 600, 700);

      break;

    case 3: //lose
      background("red");
      fill("white");
      textSize(40);
      text("You lost, and COVID-19 has wiped out humanity!", width / 2, height / 2);

      fill("black");
      text("Way to GO, loser!", 600, 450);
      text("Click mouse for a shot at redemption!", 600, 700);
      break;
  }





}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      timer = maxTimer;
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }
      myState = 0;
      break;


    case 3:
      //reset maxTimer
      timer = maxTimer;
      cars = [];
      for (var i = 0; i < maxCars; i++) {
        cars.push(new Car());
      }

      myState = 0;
      break;

  }
}


function game() {
  background("black");

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);

    }
  }

  if (cars.length == 0) {
    myState = 2;
  }

  //frog
  fill('green');
  image(mask, frogPos.x, frogPos.y, 75, 75);
  checkForKeys();
}





function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

//our Car class
function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  //methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    image(covid, this.pos.x, this.pos.y, 40, 40);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }


}
