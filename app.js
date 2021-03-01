var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height/2;
var status = 0;
var dx = 4;
var dy = -4;
var player1 = 0;
var player2 = 0;
var paddleHeight = 100;
var paddleWidth = 20;
var upPressed = false;
var downPressed = false;
var paddleY = (canvas.height-paddleHeight)/2;
var upPressedTwo = false;
var downPressedTwo = false;
var paddleYTwo = (canvas.height-paddleHeight)/2;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler,false);
document.addEventListener("keydown", keyDownHandlerTwo, false);
document.addEventListener("keyup", keyUpHandlerTwo,false);

function keyDownHandler(e) {
  if(e.keyCode == 38) {
    upPressed = true;
  }
  else if(e.keyCode == 40){
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.keyCode == 38) {
    upPressed = false;
  }
  else if(e.keyCode == 40) {
    downPressed = false;
  }
}

function keyDownHandlerTwo(e) {
    if(e.keyCode == 87) {
      upPressedTwo = true;
    }
    else if(e.keyCode == 83){
      downPressedTwo = true;
    }
}

function keyUpHandlerTwo(e) {
    if(e.keyCode == 87) {
      upPressedTwo = false;
    }
    else if(e.keyCode == 83) {
      downPressedTwo = false;
    }
}

function paddle1() {
  ctx.beginPath();
  ctx.rect(canvas.width-(paddleWidth *2), paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function paddle2() {
  ctx.beginPath();
  ctx.rect(paddleWidth , paddleYTwo, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

if (status % 2 == 0){
  dx = dx;
  dy = dy;
}
else{
  dx = -dx;
  dy = -dy;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}



function drawPlayer1() {
  ctx.font = '24px Arial';
  ctx.fillText('Player one: ' + player1, 325, 20);
  ctx.fill();
}

function drawPlayer2() {
  ctx.font = '24px Arial';
  ctx.fillText('Player two: ' + player2, 625, 20);
  ctx.fill();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPlayer1();
  drawPlayer2();
  paddle1();
  paddle2();

if (x + dx > (canvas.width - ballRadius) - paddleWidth * 2) {
  if(y > paddleY && y < paddleY + paddleHeight){
    x = canvas.width-(paddleWidth *2) - 3;
    dx = dx + 0.02;
    dx = -dx
  }
}
else if (x + dx < paddleWidth * 2){
  if(y > paddleYTwo && y < paddleYTwo + paddleHeight){
    x = paddleWidth * 2 + 3;
    dx = dx + 0.02;
    dx = -dx;
  }
}

if (x + dx < ballRadius) {
  status++;
  player2++;
  x = canvas.width/2;
  y = canvas.height/2;
if (status % 2 == 0){
  dx = dx;
  dy = dy;
}
else{
  dx = -dx;
  dy = -dy;
}
  }
else if(x + dx > canvas.width-ballRadius) {
  status++;
  player1++;
  x = canvas.width/2;
  y = canvas.height/2;
  if (status % 2 == 0){
    dx = dx;
    dy = dy;
  }
  else{
    dx = -dx;
    dy = -dy;
  }
}
if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
  dy = -dy;
}

x += dx;
y += dy;

if (player1 == 7) {
  alert('player 1 has won');
}

if(player2 == 7) {
  alert('player 2 has won');
}

if(upPressed && paddleY > 0) {
  paddleY -= 7;
}
else if(downPressed && paddleY < canvas.height-paddleHeight) {
  paddleY += 7;
}

if(upPressedTwo && paddleYTwo > 0) {
  paddleYTwo -= 7;
}
else if(downPressedTwo && paddleYTwo < canvas.height-paddleHeight) {
  paddleYTwo += 7;
}
}
setInterval(draw, 10);