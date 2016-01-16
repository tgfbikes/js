'use strict';

(function iife() {
  
  function clickHandler() {
    console.log('clicked');
    console.log(this.id);
  }
  
  var tds = document.getElementsByTagName('td');
  for (let i = 0; i < tds.length; i += 1) {
    let td = tds[i];
    td.addEventListener('click', clickHandler);
  }

})();