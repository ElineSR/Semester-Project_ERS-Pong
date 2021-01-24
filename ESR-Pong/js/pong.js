//THE PONG GAME

//selecting the canvas element
const cvs = document.getElementById("esr-pong");
const ctx = cvs.getContext("2d");

//creating the Users paddle
const user = {
  x: 0, //left side of the canvas, 0 x is the very beginign of the left side
  y: cvs.height / 2 - 100 / 2, //the minus 100 refers to the height of the paddle
  width: 10,
  height: 100,
  color: "white",
  score: 0
};
// creating the computers paddle
const com = {
  x: cvs.width - 10,
  y: cvs.height / 2 - 100 / 2,
  width: 10,
  height: 100,
  color: "white",
  score: 0
};

//create the ball
const ball = {
  x: cvs.width / 2,
  y: cvs.heigth / 2,
  radius: 10,
  speed: 5,
  velocityX: 5,
  velocityY: 5,
  color: "white"
};

// drawing the rectangle function
function drawRect(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};


//Create the center line
const centerLine = {
  x: cvs.width / 2 - 1,
  y: 0,
  width: 2,
  height: 10,
  color: "white"
};


// draw the center line
function drawLine() {
  for (let i = 0; i < cvs.height; i += 15) {
    drawRect(centerLine.x, centerLine.y + i, centerLine.width, centerLine.height, centerLine.color);
  }
}

// drawing the circle
function drawCircle(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}


//draw the text
function drawText(text, x, y, color) {
  ctx.fillStyle = color;
  ctx.font = "45px fantasy";
  ctx.fillText(text, x, y, color);
}


function render() {
  //clear the canvas 
  drawRect(0, 0, cvs.width, cvs.height, "black");


  //draw the center line
  drawLine();

  //draw score
  drawText(user.score, cvs.width / 4, cvs.height / 5, "white");
  drawText(com.score, 3 * cvs.widths / 4, cvs.height / 5, "white");

  //draw the user and computer paddle
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(com.x, com.y, com.width, com.height, com.color);

  //draw the ball
  drawCircle(ball.x, ball.y, ball.radius, ball.color);

}
//collision detection, b for Ball and p for Player 
// function collision(b,p){
//   b.top = b.y - b.radius;
// }

// updating the game
function update() {
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;

  if (ball.y + ball.radius > cvs.height || ball.y - ball.radius < 0) {
    ball.velocityY = ball.velocityY;
  }
}




//Game initiating

function game() {
  update();
  render();
}

//loop
const framePerSecond = 50;
setInterval(game, 1000 / framePerSecond);