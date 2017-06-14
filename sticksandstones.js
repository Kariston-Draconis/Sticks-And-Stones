console.log('Sticks And Stones');

var count = 0;

var board = document.querySelector('.board')
var newRound = document.querySelector('#newRound')

var play = function() {
  if (event.target.style.backgroundImage == "") {
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
}

var resetBoard = function() {
  for (square = 0; square < 9; square++) {
    var grid = document.querySelectorAll('.gridSquare')[square];
    grid.style.backgroundImage = "";
  };
}

board.addEventListener('click', play)
newRound.addEventListener('click', resetBoard)
