'use strict';

(function iife() {
  var tds = document.getElementsByTagName('td');
  var currentPlayer = 'X';
  var isWinner = false;
  var alertCatsGame = false;
  var moveCount = 0;
  var board = [['', '', ''], ['', '', ''], ['', '', '']];
  
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
  
  function checkForTie() {
    if (moveCount === 9 && !alertCatsGame && !isWinner) {
      alert('Cats game');
      alertCatsGame = true;
    } else {
      return
    }
  }
  
  function checkWinningPositions(x1, y1, x2, y2, x3, y3) {
    let wp1 = board[x1][y1];
    let wp2 = board[x2][y2];
    let wp3 = board[x3][y3];
    if (wp1 === currentPlayer && wp2 === currentPlayer && wp3 === currentPlayer) {
      document.getElementById('square' + x1 + y1).className = 'winner';
      document.getElementById('square' + x2 + y2).className = 'winner';
      document.getElementById('square' + x3 + y3).className = 'winner';
      isWinner = true;
    }
  }
  
  function checkForWin() {
    checkWinningPositions(0, 0, 0, 1, 0, 2); // 1st row
    checkWinningPositions(1, 0, 1, 1, 1, 2); // 2nd row
    checkWinningPositions(2, 0, 2, 1, 2, 2); // 3rd row
    checkWinningPositions(0, 0, 1, 0, 2, 0); // 1st col
    checkWinningPositions(0, 1, 1, 1, 2, 1); // 2nd col
    checkWinningPositions(0, 2, 1, 2, 2, 2); // 3rd col
    checkWinningPositions(0, 0, 1, 1, 2, 2); // diagonal
    checkWinningPositions(0, 2, 1, 1, 2, 0); // diagonal
    if (isWinner) {
      alert('The winner is ' + currentPlayer);
    }
  }
  
  function clickHandler() {
    if (this.value) {
      return
    }
    if (currentPlayer === 'X') {
      moveCount += 1;
      this.innerHTML = 'X';
      updateBoard(this.index);
      checkForWin();
      checkForTie();
      currentPlayer = 'O';
    } else {
      moveCount += 1;
      this.innerHTML = 'O';
      updateBoard(this.index);
      checkForWin();
      checkForTie();
      currentPlayer = 'X';
    }
  }

})();