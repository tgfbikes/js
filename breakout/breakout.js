'use strict';

(function breakoutIIFE() {
  var main = document.getElementById('main');
  var paddle = document.createElement('div');
  document.body.addEventListener('mousemove', function mousemove(evt) {
    console.log(evt.clientX);
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
  paddle.style.left = (800 - 140) / 2;
  
}());
