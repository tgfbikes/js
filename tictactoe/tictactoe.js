'use strict';

(function iife() {
  
  var tds = document.getElementsByTagName('td');
  var turn = 'X';
  
  (function initializeBoard() {
    for (let i = 0; i < tds.length; i += 1) {
      let td = tds[i];
      td.addEventListener('click', clickHandler);
    }
  })();
  
  function checkTurn() {
    if (turn === 'X') {
      this.innerHTML = 'X';
      turn = 'O';
    } else {
      this.innerHTML = 'O';
      turn = 'X';
    }
  }
  
  function checkIfWinner() {
    
    // if there is a winner
    // alert('Winner');
    // document.location.reload();
  }
  
  function clickHandler() {
    if (this.value) {
      return
    }
    checkTurn();
    checkIfWinner();
  }

})();