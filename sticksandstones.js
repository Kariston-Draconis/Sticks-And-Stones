console.log('Sticks And Stones');

var count = 0;

var board = document.querySelector('.board')
var square = document.querySelector('.gridSquare')
var stone = document.querySelector('.stone')
var bones = document.querySelector('.bones')

var play = function() {
  if(count % 2 == 0) {
    stone.style.visibility = 'visible';
    count = count + 1;
  } else {
    bones.style.visibility = 'visible';
    count = count + 1;
  }
}

board.addEventListener('click', play)
