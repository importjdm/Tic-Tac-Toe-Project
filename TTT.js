//Module that makes grid
function gameBoard() {
  const board = [];
  const rows = 3;
  const columns = 3;
  let initialSet = "0";

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let y = 0; y < columns; y++) {
      board[i].push(Cell());
      console.log(board);
    }
  }

  let getBoard = () => board;
  //adds player letter right array (cell)

  const printLetter = (column, row, player) => {
    const target = board[row][column].getValue();
    //const targetLength = target.getValue();

    if (target.length === 0) {
      board[row][column].addLetter(player);
    } else return;
  };

  return { getBoard, printLetter };
}

function Cell() {
  let value = "";

  const addLetter = (player) => {
    value = player;
  };
  const getValue = () => value;

  return {
    addLetter,
    getValue,
  };
}

function controlFlow() {
  const playerOne = "Player One";
  const playerTwo = "Player Two";

  const board = gameBoard();

  let letter = "";
  //object of players
  const players = [
    {
      name: playerOne,
      letter: "X",
    },
    {
      name: playerTwo,
      letter: "O",
    },
  ];

  //WHEN PLAYERS SWITCH THE LETTER SWITCHES

  //gets active player
  let activePLayer = players[0];

  const switchPlayersTurn = () => {
    if (activePLayer === players[0]) {
      activePLayer = players[1];
    } else {
      activePLayer = players[0];
    }

    return activePLayer;
  };
  //switches letter when player changes
  const switchLetter = () => {
    letter = activePLayer.letter;
  };
  const getActivePlayer = () => activePLayer;

  const playRound = (column, row) => {
    board.printLetter(column, row, getActivePlayer().letter);
    switchPlayersTurn();
    console.log(activePLayer);
  };

  return {
    getActivePlayer,
    switchPlayersTurn,
    switchLetter,
    playRound,
    getBoard: board.getBoard,
  };
}

function ScreenController() {
  const game = controlFlow();
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    //get newest version of board and player turn
    boardDiv.textContent = "";
    const gameLayOut = game.getBoard();
    const activePlayer = game.getActivePlayer;

    //Render board squares
    gameLayOut.forEach((row, index1) => {
      row.forEach((emptyCell, index) => {
        //for each emtpy array in the gameBoard add button
        const cell = document.createElement("button");
        cell.classList.add(".cell");
        //Create a data attribute to identify the column
        //Makes it easier to know which square to change
        cell.dataset.row = index1;
        cell.dataset.column = index;
        cell.textContent = emptyCell.getValue();
        boardDiv.appendChild(cell);
      });
    });
  };

  //Add event listener for the board
  function clickCell(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    //make sure i've clicked a column and the gaps in between
    if (!selectedColumn) return;

    game.playRound(selectedColumn, selectedRow);
    updateScreen();
  }

  boardDiv.addEventListener("click", clickCell);
  //initial render
  updateScreen();
}

ScreenController();
//grid is made with buttons, all have listeners
//the active player gets to click a box
//when clicked that box turns into that persons letter

//get the index and row of the button that was clicked
//when you have put the activeplayers letter
//
