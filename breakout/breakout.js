'use strict';

(function breakoutIIFE() {
  var main = document.getElementById('main');
  var paddle = document.createElement('div');
  var paddlePos = 800;
  document.body.addEventListener('mousemove', function mousemove(evt) {
    if (evt.clientX < 630) {
      paddle.style.left = 0;
    } else if (evt.clientX > 1290) {
      paddle.style.left = 660;
    } else {
      paddle.style.left = evt.clientX - 630;
      console.log(evt.clientX);
    }
  });
  
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
