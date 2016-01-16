'use strict';

(function iife() {
  var tds = document.getElementsByTagName('td');
  var currentPlayer = 'X';
  var board = [['', '', ''], ['', '', ''], ['', '', '']];
  var win = 0;
  
  (function initializeBoard() {
    for (let i = 0; i < tds.length; i += 1) {
      let td = tds[i];
      td.addEventListener('click', clickHandler);
      td.index = i;
    }
  })();
 
  function updateBoard(index) {
    var col = Math.floor(index / 3);
    var row = Math.floor(index % 3);
    board[row][col] = currentPlayer;
  }
  
  function checkForWin(row) {
    for (let val = 0; val < 3; val += 1) {
      console.log(row[val]);
      if (row[val] != currentPlayer || row[val] === '') {
        win = 0;
        return;
      }
      win += 1;
      if (win === 3) {
        console.log('The winner is ' + currentPlayer);
      }
    }
  }
  
  function isGameOver() {
    for (let row = 0; row < 3; row +=1) {
      checkForWin(board[row]);
    }
  }
  
  function clickHandler() {
    if (this.value) {
      return
    }
    if (currentPlayer === 'X') {
      this.innerHTML = 'X';
      updateBoard(this.index);
      currentPlayer = 'O';
    } else {
      this.innerHTML = 'O';
      updateBoard(this.index);
      currentPlayer = 'X';
    }
    isGameOver();
  }

})();