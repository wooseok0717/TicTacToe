///////////////////////////////// MODEL ///////////////////////////////////

// current table data
var currentStatus = {
  table: {},
  player: 'X',
  gameRunning: true,
  score: {
    X: 0,
    O: 0
  }
}

// initializer
var initialize = function() {
  for (var x = 1; x < 10; x++) {
    currentStatus.table[x] = null;
  }
  currentStatus.player = 'X';
  currentStatus.gameRunning = true;
};



// check if player has won
var checkWins = function() {
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
  // console.log(possibleWins);
  possibleWins.forEach(array => {
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

// handle click
var handleClick = function(event) {
  if (event.target.innerText) {
    renderInvalidMove();
    return;
  }
  placeMark(event.target.id);
  checkWins();
  if (currentStatus.gameRunning) {
    renderTable(currentStatus.table);
    renderTurn(currentStatus.player);
  } else {
    renderTable(currentStatus.table);
    turnOver();
    renderScore(currentStatus.score)
    renderTurn(currentStatus.table);
    alert(currentStatus.player + 'Has Won the game!!')
  }
};

// reset the board
var resetBoard = function() {
  initialize();
  renderTable(currentStatus.table);
  document.getElementById('turn').innerHTML = '';
  renderTurn(currentStatus.player);
  console.log('hello from reset', currentStatus);
}

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
  player1.innerHTML = 'Player X: ' + scoreObj.X;
  player2.innerHTML = 'Player O: ' + scoreObj.O;
}

// render players turn
var renderTurn = function(player) {
  if (!currentStatus.gameRunning) {
    turn.innerHTML = currentStatus.player + ' Has Won the game!!'
    renderRematch();
  } else {
    turn.innerHTML = `It is Player ${player}'s turn!!`
  }
}

var renderRematch = function() {
  var rematchBtn = document.createElement('button');
  rematchBtn.setAttribute('id', 'reset');
  rematchBtn.innerHTML = 'Rematch?'
  rematchBtn.addEventListener('click', resetBoard);
  document.getElementById('turn').append(rematchBtn)
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
    box.addEventListener('click', handleClick)
    row.append(box);
    currentNumber++;
  }
  table.append(row);
}

// render table
var renderTable = function(table) {
  for (var x = 1; x < 10; x++) {
    var current = document.getElementById(x);
    if (table[x]) {
      current.innerHTML = currentStatus.table[x];
      // console.log('hello', current);
    } else {
      current.innerHTML = null;
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
// currentStatus.table[1] = 'X';
renderTable(currentStatus.table);


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







