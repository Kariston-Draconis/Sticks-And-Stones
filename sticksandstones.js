console.log('Sticks And Stones');

var count = 0;
var gridValues = new Array(9)
var board = document.querySelector('.board')
var newRound = document.querySelector('#newRound')

var play = function() {
  if (event.target.style.backgroundImage == "" && event.target.className == "gridSquare") {
    if(count % 2 == 0) {
      event.target.style.backgroundImage = "url('Stone.png')";
      event.target.style.backgroundSize = "100% 100%";
      gridValues[Number(event.target.dataset.index)] = "S";
      count = count + 1;
      checkWin();
    } else {
      event.target.style.backgroundImage = "url('Bones.png')";
      event.target.style.backgroundSize = "100% 100%";
      gridValues[Number(event.target.dataset.index)] = "B";
      count = count + 1;
      checkWin();
    }
  }
}

var checkWin = function() {
  if (gridValues[0] == gridValues[1] && gridValues[1] == gridValues[2]) {
    if (gridValues[0] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[0] === "B") {
      console.log('Bones Wins');
    }
  } else if (gridValues[3] == gridValues[4] && gridValues[4] == gridValues[5]) {
    if (gridValues[3] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[3] === "B") {
      console.log('Bones Wins');
    }
  } else if (gridValues[6] == gridValues[7] && gridValues[7] == gridValues[8]) {
    if (gridValues[6] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[6] === "B") {
      console.log('Bones Wins');
    }
  } else if (gridValues[0] == gridValues[3] && gridValues[3] == gridValues[6]) {
    if (gridValues[0] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[0] === "B") {
      console.log('Bones Wins');
    }
  } else if (gridValues[1] == gridValues [4] && gridValues[4] == gridValues[7]) {
    if (gridValues[1] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[1] === "B") {
      console.log('Bones Wins');
    }
  }else if (gridValues[2] == gridValues[5] && gridValues[5] == gridValues[8]) {
    if (gridValues[2] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[2] === "B") {
      console.log('Bones Wins');
    }
  }else if (gridValues[0] == gridValues[4] && gridValues[4] == gridValues[8]) {
    if (gridValues[0] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[0] === "B") {
      console.log('Bones Wins');
    }
  } else if (gridValues[2] == gridValues[4] && gridValues[4] == gridValues[6]) {
    if (gridValues[2] === "S") {
      console.log('Stones Wines');
    } else if (gridValues[2] === "B") {
      console.log('Bones Wins');
    }
  }
}

var resetBoard = function() {
  for (square = 0; square < 9; square++) {
    var grid = document.querySelectorAll('.gridSquare')[square];
    grid.style.backgroundImage = "";
    gridValues = new Array(9)
    count = 0
  };
}


// var winStone = function() {
//    = "StoneWins.png";
// }
//
// var winBones = function() {
//
// }

board.addEventListener('click', play)
newRound.addEventListener('click', resetBoard)
