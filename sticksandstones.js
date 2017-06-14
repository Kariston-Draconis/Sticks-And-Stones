console.log('Sticks And Stones');

var count = 0;

var board = document.querySelector('.board')
var square = document.querySelector('.gridSquare')

var play = function() {
  if(count % 2 == 0) {
    event.target.style.backgroundImage = "url('Stone.png')"
    event.target.style.backgroundSize = "100% 100%"
    count = count + 1;
  } else {
    event.target.style.backgroundImage = "url('Bones.png')"
    event.target.style.backgroundSize = "100% 100%"
    count = count + 1;
  }
}

board.addEventListener('click', play)
