'use strict';

(function breakoutIIFE() {
  var main = document.getElementById('main');
  var paddle = document.createElement('div');
  var ball = document.createElement('div');
  var intervalID = window.setInterval(moveBall, 20);
  // ball velocity
  var msPerFrame = 20;
  var secondsPerFrame = msPerFrame / 1000;
  // This sets horizontal rate to 200--600 pixels/second
  var vx = secondsPerFrame * (Math.floor(Math.random() * 400) + 200);
  if (Math.random() < 0.5) vx = -vx;
  // This sets verical rate to 500 pixels/second
  var vy = secondsPerFrame * 500;
  
  document.body.addEventListener('mousemove', function mousemove(evt) {
    if (evt.clientX < 630) {
      paddle.style.left = 0;
    } else if (evt.clientX > 1290) {
      paddle.style.left = 660;
    } else {
      paddle.style.left = evt.clientX - 630;
    }
  });
  
  document.body.addEventListener('click', function createBall(evt) {
    ball.id = 'ball';
    ball.style.left = 300;
    ball.style.top = 385;
    main.appendChild(ball);
    document.body.removeEventListener('click');
  });
  
  function checkForPaddleCollision(x, y) {
    var paddleLeft = parseInt(paddle.style.left, 10);
    var paddleTop = parseInt(paddle.style.top, 10);
    
    if (x > (paddleLeft + 140)) {
      return;
    }
    if ((x+30) < (paddleLeft)) {
      return;
    }
    if ((y + 30) < 550) {
      return;
    }
    vy *= -1;
  }
  
  function checkForBrickCollision(x, y) {
    var brickx = 80;  // dimensions of a brick
    var bricky = 20;
    var row = Math.floor((y - 100) / bricky);
    var col = Math.floor(x / brickx);
    if (row < 0 || row >= 10 || col < 0 || col >= 10) {
      return;
    }
    // not in the right area
    if ((x+2) % brickx < 4 || (y+2) % bricky < 4) {
      return;
    }
    // not quite in the brick--it's in the white border around a brick
    // otherwise, row and column give the brick number
    try {
      var brick = document.getElementsByClassName('row' + row.toString() + ' col' + col.toString());
      if (!brick[0].classList.contains('broken') && vy < 0) {
        brick[0].classList.add('broken');
        vy = -1 * vy;
      }
    } catch (e) {}
  }
  
  function checkForWallCollision(x, y) {
    // Check for collision with game box on x plain
    if (x <= 0 || x >= 770) {
      vx = -1 * vx;
    }
    // Check for collision with game box on y plain
    if (y <= 0 || y >= 570) {
      vy = -1 * vy;
    }
    
  }
  
  function moveBall() {
    var oldX = parseInt(ball.style.left, 10);
    var oldY = parseInt(ball.style.top, 10);
    var newX = oldX + vx;
    var newY = oldY + vy;
    ball.style.left = newX;
    ball.style.top = newY;
    checkForWallCollision(newX, newY);
    checkForBrickCollision(newX, newY);
    checkForBrickCollision(newX + 30, newY);
    checkForBrickCollision(newX, newY + 30);
    checkForBrickCollision(newX + 30, newY + 30);
    checkForPaddleCollision(newX, newY);
  }
  
  function setUpBoard() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        var div = document.createElement('div');
        div.classList.add('brick', 'row' + i.toString(), 'col' + j.toString());
        main.appendChild(div);
      }
    }
  }
  
  function addBrokenClass(elem) {
    elem.classList.add('broken');
  }
  
  function addPaddle() {
    paddle.id = 'paddle';
    main.appendChild(paddle);
  }
  
  setUpBoard();
  addPaddle();
  
}());
