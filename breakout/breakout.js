'use strict';

(function breakoutIIFE() {
  var main = document.getElementById('main');
  var paddle = document.createElement('div');
  var ball = document.createElement('div');
  // Every 20ms call the moveBall function.
  var intervalID = window.setInterval(moveBall, 20);
  // ball velocity
  var msPerFrame = 20;
  var secondsPerFrame = msPerFrame / 1000;
  // This sets horizontal rate to 200--600 pixels/second
  var vx = secondsPerFrame * (Math.floor(Math.random() * 400) + 200);
  if (Math.random() < 0.5) vx = -vx;
  // This sets verical rate to 500 pixels/second
  var vy = secondsPerFrame * 500;
  
  // Handler performs logic to center mouse over the paddle.
  document.body.addEventListener('mousemove', function mousemove(evt) {
    console.log(evt.clientX);
    if (evt.clientX < main.offsetLeft + 70) {
      paddle.style.left = 0;
    } else if (evt.clientX > main.offsetLeft + 710) {
      paddle.style.left = 660;
    } else {
      paddle.style.left = evt.clientX - main.offsetLeft - 70;
    }
  });
  
  // Create ball and initialize its position on the board.  Remove
  // click handler so user can't make more than one ball.
  document.body.addEventListener('click', function createBall(evt) {
    ball.id = 'ball';
    ball.style.left = 300;
    ball.style.top = 385;
    main.appendChild(ball);
    document.body.removeEventListener('click');
  });
  
  // Checks for paddle collision with ball; if so then negate vy.
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
    
    // not in the right area
    if (row < 0 || row >= 10 || col < 0 || col >= 10) {
      return;
    }
    // not quite in the brick--it's in the white border around a brick
    // otherwise, row and column give the brick number
    if ((x+2) % brickx < 4 || (y+2) % bricky < 4) {
      return;
    }
    // If there is no brick then there will be a ton of errors, hence
    // the try catch block.  Try to get a brick, but if no match then
    // do nothing.
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
  
  // If the ball has reached the bottom or the top then there will be 
  // a win or a loss; both will refresh for a new game.
  function checkForWinOrLoss(y) {
    if (y < 50) {
      ball.classList.add('broken');
      window.clearInterval(intervalID);
      alert('You win');
      window.location.reload();
    }
    if (y > 570) {
      ball.classList.add('broken');
      window.clearInterval(intervalID);
      alert('You lose');
      window.location.reload();
    }
  }
  
  // Gets the balls old top and left positions and then calculates 
  // new position based off the velocity, sets new values to move the ball
  // then checks for collisions with the wall, bricks and paddle.  Then
  // checks for a win or loss.
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
    checkForWinOrLoss(newY);
  }
  
  // Double for loop to set up bricks.
  function setUpBoard() {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        var div = document.createElement('div');
        div.classList.add('brick', 'row' + i.toString(), 'col' + j.toString());
        main.appendChild(div);
      }
    }
  }
  
  // Adds paddle to board
  function addPaddle() {
    paddle.id = 'paddle';
    main.appendChild(paddle);
  }
  
  setUpBoard();
  addPaddle();
  
}());
