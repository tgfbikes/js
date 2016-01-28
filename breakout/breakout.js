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
  
  function checkForCollision(x, y) {
    if (x <= 0 || x >= 770) {
      vx = -1 * vx;
    }
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
    checkForCollision(newX, newY);
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
  
  
  console.log(vx);
  console.log(vy);
  setUpBoard();
  addPaddle();
  
}());
