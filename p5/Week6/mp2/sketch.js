var myState = 0;
var timer = 0;
var x = 0;
var y = 0;
var hurray;
var computer;
var huzzah;
var nice;
var red;
var sweater;
var bit;
var cello;
var guitar;
var house;
var me;


function setup() {
  // put setup code here
  createCanvas(800, 800);
  hurray = loadImage("images/hurray.jpg");
  computer = loadImage("images/computer.jpg");
  huzzah = loadImage("images/huzzah.jpg");
  nice = loadImage("images/nice.jpg");
  red = loadImage("images/redman.jpg");
  sweater = loadImage("images/sweater.jpg");
  bit = loadFont("fonts/bit.ttf");
  me = loadImage("images/me.jpg");
  house = loadImage("images/house.png");
  guitar = loadImage("images/guitar.png");
  cello = loadImage("images/cello.png");

}

function draw() {
  // put drawing code here

  switch (myState) {
    case 0:
      textFont("bit");
      background("grey");
      textSize(20, 20);
      image(me, 200, 300, 400, 400);
      text("Welcome to a brief historical quiz about", 200, 80);
      textSize(50, 50);
      text("Sean Wilkinson!", 200, 200);
      timer++;
      if (timer > 200) {
        myState = 1;
        timer = 0;
      }
      break;

    case 1:
      background("green");
      rect(100, 100, 200, 50);
      rect(100, 200, 200, 50);
      textSize(20, 20);
      text("Where was Sean born?", 100, 75);
      text("Champaign", 125, 125);
      text("Springfield", 125, 225);
      image(house, 400, 50, 200, 200);
      image(red, x, 400, 200, 200);
      x = x + 3;
      if (x > width) {
        x = 0;
      }
      break;

    case 2:
      background("green");
      image(computer, x, 550, 300, 250);
      textSize(40, 20);
      text("Correct!", 100, 100);
      text("Sean was born in Springfield,", 100, 200);
      text("but was raised in Champaign!", 100, 250);
      textSize(40);

      text("Nice one! You did it!", x, 500);
      x = x + 3;
      if (x > width) {
        x = 0;
      }
      timer++;
      if (timer > 450) {
        myState = 3;
        timer = 0;
      }
      break;


    case 3:
      background("grey");
      rect(100, 100, 200, 50);
      rect(100, 200, 200, 50);
      textSize(20, 20);
      text("What instrument did Sean first learn to play?", 100, 75);
      text("Guitar", 125, 125);
      image(cello, 400, 200, 200, 400);
      image(guitar, 50, 400, 300, 400);
      text("Cello", 125, 225);
      break;

    case 4:
      background("grey");
      textSize(40, 20);
      text("Correct!", 100, 100);
      textSize(20, 20)
      image(hurray, x, 300);
      text("Sean started playing cello in fourth grade,", 100, 150);
      text("and started playing guitar in eighth grade.", 100, 200);
      text("You're so smart!", x, 275);
      x = x + 3;
      if (x > width) {
        x = 0;
      }
      timer++;
      if (timer > 450) {
        myState = 5;
        timer = 0;
      }
      break;

    case 5:
      background("blue");
      rect(100, 100, 200, 50);
      rect(100, 200, 200, 50);
      textSize(20, 20);
      text("How many siblings does Sean have?", 100, 75);
      text("Four", 125, 125);
      text("One", 125, 225);
      break;

    case 6:
      background("grey");
      textSize(40, 20);
      text("Correct!", 100, 100);
      textSize(20, 20);
      image(sweater, 300, y, 500, 400);
      text("Sean has one brother.", 100, 200);
      text("He lives in St. Louis.", 100, 250);
      y = y + 3;
      if (y > height) {
        y = 0;
      }
      timer++;
      if (timer > 450) {
        myState = 7;
        timer = 0;
      }
      break;

    case 7:
      background("gold");
      rect(100, 100, 200, 50);
      rect(100, 200, 200, 50);
      textSize(20, 20);
      text("What is Sean's favorite movie?", 100, 75);
      text("Pulp Fiction", 125, 125);
      text("Stand by Me", 125, 225);
      break;

    case 8:
      background("gold");
      textSize(40, 20);
      text("Correct!", 100, 100);
      textSize(20, 20);
      image(nice, 100, 300, 500, 400);
      text("Sean's favorite movie is Stand by Me.", 100, 200);
      x = x + 3;
      if (x > width) {
        x = 0;
      }
      timer++;
      if (timer > 450) {
        myState = 8;
        timer = 0;
      }
      break;

  }

}

function mouseReleased() {
  if ((mouseX > 100) && (mouseX < 300) && (mouseY > 200) && (mouseY < 300))
    myState = myState + 1;
  if (myState > 8) {
    myState = 0;
  }

}
