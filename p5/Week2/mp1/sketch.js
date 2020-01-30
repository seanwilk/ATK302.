var bangers;

function setup() {
  // put setup code here
  createCanvas(1000, 700) ;
  //rectMode(CENTER) ;

  bangers = loadFont('assets/Bangers-Regular.ttf');

}

function draw() {
  // put drawing code here

  //stuff we always want to show

  if (mouseIsPressed) {
    background(250, 0, 0,)
//explode
    fill(250, 130, 0)
    triangle(288, 546, 240, 510, 298, 513);

    fill(250, 130, 0)
    triangle(298, 530, 294, 482, 320, 510);

    fill(250, 130, 0)
    triangle(300, 500, 334, 450, 340, 517);

    fill(250, 130, 0)
    triangle(337, 510, 362, 505, 347, 535);

    fill(250, 130, 0)
    triangle(348, 526, 385, 548, 325, 562);

    fill(250, 130, 0)
    triangle(335, 554, 311, 610, 296, 553);

    fill(250, 130, 0)
    triangle(291, 537, 258, 565, 306, 563);

    fill(250, 130, 0)
    triangle(343, 551, 371, 570, 322, 565);


//yellow explosion
    fill(250, 250, 0)
    ellipse(322, 535, 50, 50);

    fill(250, 250, 0)
    triangle(340, 551, 352, 564, 324, 557);

    fill(250, 250, 0)
    triangle(301, 549, 255, 515, 314, 515,);

    fill(250, 250, 0)
    triangle(322, 511, 373, 545, 338, 555,);

    fill(250, 250, 0)
    triangle(311, 515, 332, 461, 334, 522,);

    fill(250, 250, 0)
    triangle(301, 550, 312, 602, 332, 553,);

    fill(250, 250, 0)
    triangle(334, 515, 354, 510, 345, 527,);

    fill(250, 250, 0)
    triangle(305, 520, 299, 496, 316, 515,);

    fill(250, 250, 0)
    triangle(299, 546, 272, 558, 306, 556,)


//

    fill(250)
    rect(250, 700, 100, 300);

    fill(250)
    ellipse(150, 100, 75, 75);

    fill(250)
    ellipse(200, 100, 75, 75);

    fill(250)
    ellipse(175, 135, 75, 75);

    fill(250)
    ellipse(225, 135, 75, 75);


    fill(250)
    ellipse(400, 100, 85, 85);

    fill(250)
    ellipse(450, 100, 75, 75);

    fill(250)
    ellipse(425, 135, 95, 95);

    fill(250)
    ellipse(475, 135, 75, 75);

    fill(250)
    ellipse(475, 135, 75, 75);


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
    ellipse(850, 100, 75, 75);

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
    ellipse(467, 488, 10, 10);


    textSize(40);
    textFont("bangers");
    text('BOOM!', 265, 550);


}

else {
     //stuff that happens when mouse isnt pressed
     noStroke()
     background('#ABD9FF')

//person 1
      fill(0)
      ellipse(311, 474, 5, 5);

      fill(0)
      ellipse(328, 471, 5, 5);

     fill(250)
     ellipse(320, 480, 45, 45);

     fill(0)
     rect(343, 513, 20, 10);

     fill(0)
     rect(290, 513, 20, 10);

     fill('#16802D')
     rect(299, 500, 45, 60);

     fill('#16802D')
     rect(299, 550, 10, 50);

     fill('#16802D')
     rect(335, 550, 10, 50);

     fill(0)
     ellipse(311, 471, 5, 5);

     fill(0)
     ellipse(328, 471, 5, 5);

     fill(0)
     rect(308, 487, 20, 3);

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


//

     fill(250)
     rect(250, 700, 100, 300);

     fill(250)
     ellipse(150, 100, 75, 75);

     fill(250)
     ellipse(200, 100, 75, 75);

     fill(250)
     ellipse(175, 135, 75, 75);

     fill(250)
     ellipse(225, 135, 75, 75);


     fill(250)
     ellipse(400, 100, 85, 85);

     fill(250)
     ellipse(450, 100, 75, 75);

     fill(250)
     ellipse(425, 135, 95, 95);

     fill(250)
     ellipse(475, 135, 75, 75);

     fill(250)
     ellipse(475, 135, 75, 75);


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
     ellipse(850, 100, 75, 75);
   }

  

}


//do not put inside draw
function mouseReleased() {
  console.log(mouseX + ", " + mouseY) ;
}
