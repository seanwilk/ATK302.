var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;
var urb;


function setup() {
  createCanvas(400, 400);
  urb = loadImage("assets/urb.jpg");

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61801,us&units=imperial&';
  var myIDString = 'appid=6d4e2ae08633d20d4d8a23812bc35f5a'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed;
  temperature = weather.main.temp;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      image(urb, 0, 0, 400, 400);
      fill("black");
      text("Weather in Urbana, IL", 20, 20);
      // parse the weather object and put some text or images using at least 3 different weather data!
      text("the temperature is" + weather.main.temp, 20, 40);
      text("the humidity is" + weather.main.humidity, 20, 60);
      text("the windspeed is" + weather.wind.speed, 20, 80);

      fill("white");
      noStroke();
      ellipse(x, 250, 100, 100);
      ellipse(x - 50, 200, 100, 100);
      ellipse(x + 20, 200, 100, 100);
      ellipse(x - 50, 250, 75, 75);
      x = x + ws / 4;
      if (x > width) x = -100;

      fill("red");
      var tmp = 0
      tmp = map(temperature, -10, 100, 2, height - 10);
      rect(width - 40, height - 10, 30, -tmp);

      break;

  }
}
