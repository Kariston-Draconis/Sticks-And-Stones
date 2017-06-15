console.log('Sticks And Stones');

var count = 0;
var gridValues = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];
var board = document.querySelector('.board');
var newRound = document.querySelector('.newRound')

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
      stoneWins();
    } else if (gridValues[0] === "B") {
      bonesWins();
    }
  } else if (gridValues[3] == gridValues[4] && gridValues[4] == gridValues[5]) {
    if (gridValues[3] === "S") {
      stoneWins();
    } else if (gridValues[3] === "B") {
      bonesWins();
    }
  } else if (gridValues[6] == gridValues[7] && gridValues[7] == gridValues[8]) {
    if (gridValues[6] === "S") {
      stoneWins();
    } else if (gridValues[6] === "B") {
      bonesWins();
    }
  } else if (gridValues[0] == gridValues[3] && gridValues[3] == gridValues[6]) {
    if (gridValues[0] === "S") {
      stoneWins();
    } else if (gridValues[0] === "B") {
      bonesWins();
    }
  } else if (gridValues[1] == gridValues[4] && gridValues[4] == gridValues[7]) {
    if (gridValues[1] === "S") {
      stoneWins();
    } else if (gridValues[1] === "B") {
      bonesWins();
    }
  }else if (gridValues[2] == gridValues[5] && gridValues[5] == gridValues[8]) {
    if (gridValues[2] === "S") {
      stoneWins();
    } else if (gridValues[2] === "B") {
      bonesWins();
    }
  }else if (gridValues[0] == gridValues[4] && gridValues[4] == gridValues[8]) {
    if (gridValues[0] === "S") {
      stoneWins();
    } else if (gridValues[0] === "B") {
      bonesWins();
    }
  } else if (gridValues[2] == gridValues[4] && gridValues[4] == gridValues[6]) {
    if (gridValues[2] === "S") {
      stoneWins();
    } else if (gridValues[2] === "B") {
      bonesWins();
    }
  } else if (gridValues.indexOf("A") === -1) {
    tie();
  }
}

var resetBoard = function() {
  for (square = 0; square < 9; square++) {
    var grid = document.querySelectorAll('.gridSquare')[square];
    grid.style.backgroundImage = "";
    gridValues = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];
    count = 0;
  };
  document.body.removeChild(document.body.childNodes[4]);
  document.querySelector('.newRound').style.display = "none";
}


var stoneWins = function() {
   var winStone = document.createElement('IMG');
   winStone.setAttribute('src', 'StoneWins.png');
   winStone.setAttribute("alt", "Stone Wins");
   board.parentNode.insertBefore(winStone, board.nextSibling);
   var audio = new Audio('bone-crack.wav');
   audio.play();
   document.querySelector('.newRound').style.display = "inline";
}

var bonesWins = function() {
  var winBones = document.createElement('IMG');
  winBones.setAttribute('src', 'BoneWins.png');
  winBones.setAttribute("alt", "Bones Wins");
  board.parentNode.insertBefore(winBones, board.nextSibling);
  var audio = new Audio('stone-break.wav');
  audio.play();
  document.querySelector('.newRound').style.display = "inline";
}

var tie = function() {
  var noWin = document.createElement('IMG');
  noWin.setAttribute('src', 'Tie.png');
  noWin.setAttribute("alt", "Tie");
  board.parentNode.insertBefore(noWin, board.nextSibling);
  document.querySelector('.newRound').style.display = "inline";
}

board.addEventListener('click', play)
newRound.addEventListener('click', resetBoard)
