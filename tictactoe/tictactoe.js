'use strict';

(function iife() {
  var tds = document.getElementsByTagName('td');
  var xo = 'O';
  
  (function initailizeBoard() {
    for (let i = 0; i < tds.length; i += 1) {
      let td = tds[i];
      td.addEventListener('click', clickHandler);
      td.value = '';
    }
  })();
  
  function checkGameStatus() {
    for (let i = 0; i < tds.length; i += 1) {
      
    }
  }
  
  function clickHandler() {
    if (this.value) {
      return
    }
    if (xo === 'O') {
      this.innerHTML = 'X';
      xo = 'X';
    } else {
      this.innerHTML = 'O';
      xo = 'O';
    }
    console.log(this.innerHTML);
    //checkGameStatus();
  }

})();