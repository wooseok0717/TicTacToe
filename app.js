///////////////////////////////// MODEL ///////////////////////////////////

// current table data
var currentStatus = {
  table: {},
  player: 'X',
  gameRunning: true,
  score: {
    x: 0,
    o: 0
  }
}

// initializer
var initialize = function() {
  for (var x = 1; x < 10; x++) {
    currentStatus.table[x] = null;
  }
};


// Dials - just a alias for table
var n = currentStatus.table;

// possible wins
var possibleWins = [
  [n[1], n[2], n[3]],
  [n[4], n[5], n[6]],
  [n[7], n[8], n[9]],
  [n[1], n[4], n[7]],
  [n[2], n[5], n[8]],
  [n[3], n[6], n[9]],
  [n[1], n[5], n[9]],
  [n[3], n[5], n[7]]
];

// check if player has won
var checkWins = function(arrays) {
  arrays.forEach(array => {
    if (checkArrayhasAWin(array)) {
      var winner = array[0];
      currentStatus.gameRunning = false;
      currentStatus.score[winner]++;
      return true;
    }
  });
  return false;
}

// helper function to check if array has same value
var checkArrayhasAWin = function(arr) {
  if (arr[0]) {
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
      return true;
    }
  }
  return false;
}

// valid spot
var isValidLocation = function(location) {
  return location === null;
}

// mark placer
var placeMark = function(location) {
  currentStatus.table[location] = currentStatus.player;
  turnOver();
}

// turn over
var turnOver = function() {
  if (currentStatus.player === 'X') {
    currentStatus.player = 'O';
  } else {
    currentStatus.player = 'X';
  }
}



///////////////////////////////// VIEW ////////////////////////////////////

// declare app var and assign it to div element with app id
var app = document.getElementById('app');

// header
var header = document.createElement('h1');
header.setAttribute('id', 'header');
header.innerHTML = 'TIC TAC TOE';

// scoreboard
var score = document.createElement('div');
score.setAttribute('id', 'score');
score.innerHTML = '<h3>SCORE</h3>'

// players
var player1 = document.createElement('div');
player1.setAttribute('id', 'Player1');
var player2 = document.createElement('div');
player2.setAttribute('id', 'Player2');

// table
var table = document.createElement('div');
table.setAttribute('id', 'table');

// turn
var turn = document.createElement('h2');
turn.setAttribute('id', 'turn');

// append elements to table
app.append(header);
app.append(score);
score.append(player1);
score.append(player2);
app.append(table);
app.append(turn);


// render score
var renderScore = function(scoreObj) {
  player1.innerHTML = 'Player X: ' + scoreObj.x;
  player2.innerHTML = 'Player O: ' + scoreObj.o;
}

// render players turn
var renderTurn = function(player) {
  turn.innerHTML = `It is Player ${player}'s turn!!`
}

// initiate table
var currentNumber = 1;
for (var x = 1; x < 4; x++) {
  var row = document.createElement('div');
  row.setAttribute('id', `row${x}`);
  row.className = 'row';
  for (var y = 0; y < 3; y++) {
    var box = document.createElement('div');
    box.setAttribute('id', currentNumber);
    box.className = 'box';
    row.append(box);
    currentNumber++;
  }
  table.append(row);
}

// render table
var renderTable = function(table) {
  for (var x = 1; x < 10; x++) {
    if (table[x]) {
      var current = document.getElementById(1);
      current.innerHTML = 'x';
    }
  }
}

var renderInvalidMove = function() {
  alert('Invalid Move');
}


// render app



/////////////////////////////// CONTROLLER ////////////////////////////////


// initialize the table when page loads
initialize();
renderScore(currentStatus.score);
renderTurn(currentStatus.player);


// on click
  // if locations is invalid
    // isValidLocation(location)
    // render invalid location
      // renderInvalidMove
  // else
    // placeMarker
      // placeMark(location)
    // check if player has won
      // checkWins(possibleWins)
    // if player has won
      // display winner
      // renderScore
        // renderScore(currentStatus.score);
      // render rematch
        // render Rematch
    // else
      // renderTable
        // renderTable(currentStatus.table);
      // renderTurn
        // renderTurn(currentStatus.player);

// renderTable(currentStatus.table);
// render table


// handle click
  // check if the click is valid
    // if it is not valid
      // render not valid
    // else
      // invoke doLogic

// render page with view







