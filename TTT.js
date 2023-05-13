//Module that makes grid
const gameBoard = () => {
  const board = [];
  const rows = 3;
  const columns = 3;
  let initialSet = "0";

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let y = 0; y < columns; y++) {
      board[i].push(Cell());
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
};

const Cell = () => {
  let value = "";

  const addLetter = (player) => {
    value = player;
  };
  const getValue = () => value;

  return {
    addLetter,
    getValue,
  };
};
//gets players name's

let playerOne = prompt("Player one enter your name.");
let playerTwo = prompt("Player two enter your name.");

const controlFlow = () => {
  const board = gameBoard();

  let letter = "";
  //array object of players
  let players = [
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

  let end = "";

  const checkEnd = () => end;

  //gets active player
  let activePLayer = players[0];

  const switchPlayersTurn = () => {
    if (activePLayer === players[0]) {
      activePLayer = players[1];
    } else {
      activePLayer = players[0];
    }
  };

  const getActivePlayer = () => activePLayer;

  //checks if anyone has won, tie, if not next players turn
  const endGame = (end, winner) => {
    const resultDisplay = document.querySelector(".turn");

    if (end === "yes") {
      resultDisplay.innerText = getActivePlayer().name + " won!";
    } else if (end === "no") {
      switchPlayersTurn();
      resultDisplay.innerText = getActivePlayer().name + "'s turn!";
    } else {
      resultDisplay.innerText = "it's a tie!";
    }
  };

  //checks if someone won
  const checkForWinner = (winner) => {
    const boardValues = board.getBoard();
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    let g = 0;
    let j = 0;
    let r = 0;
    let cc = 0;
    let jii = 2;
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;
    let scoreE = 0;
    let scoreF = 0;
    let scoreG = 0;
    let scoreJ = 0;

    for (var i = 0; i < 10; i++) {
      switch (true) {
        case boardValues[0][a].getValue() === winner:
          if (scoreA === 3) {
            // you won if true
            i = 9;
          } else if (scoreA != 3 && a < 2) {
            scoreA++;
            a++;
            i = 0;
          } else if (scoreA != 3) {
            scoreA++;
          }
          break;
        case boardValues[1][b].getValue() === winner:
          if (scoreB === 3) {
            // you won if true
            i = 9;
          } else if (scoreB != 3 && b < 2) {
            scoreB++;
            b++;
            i = 0;
          } else if (scoreB != 3) {
            scoreB++;
          }
          break;

        case boardValues[2][c].getValue() === winner:
          if (scoreC === 3) {
            // you won if true
            i = 9;
          } else if (scoreC != 3 && c < 2) {
            scoreC++;
            c++;
            i = 0;
          } else if (scoreC != 3) {
            scoreC++;
          }
          break;

        case boardValues[d][0].getValue() === winner:
          if (scoreD === 3) {
            // you won if true
            i = 9;
          } else if (scoreD != 3 && d < 2) {
            scoreD++;
            d++;
            i = 0;
          } else if (scoreD != 3) {
            scoreD++;
          }
          break;

        case boardValues[e][1].getValue() === winner:
          if (scoreE === 3) {
            // you won if true
            i = 9;
          } else if (scoreE != 3 && e < 2) {
            scoreE++;
            e++;
            i = 0;
          } else if (scoreE != 3) {
            scoreE++;
          }
          break;

        case boardValues[f][2].getValue() === winner:
          if (scoreF === 3) {
            // you won if true
            i = 9;
          } else if (scoreF != 3 && f < 2) {
            scoreF++;
            f++;
            i = 0;
          } else if (scoreF != 3) {
            scoreF++;
          }
          break;

        case boardValues[g][g].getValue() === winner:
          if (scoreG === 3) {
            // you won if true
            i = 9;
          } else if (scoreG != 3 && g < 2) {
            scoreG++;
            g++;
            i = 0;
          } else if (scoreG != 3) {
            scoreG++;
          }
          break;

        case boardValues[j][jii].getValue() === winner:
          if (scoreJ === 3) {
            // you won if true
            i = 9;
          } else if (scoreJ != 3 && j < 2) {
            scoreJ++;
            j++;
            jii--;
            i = 0;
          } else if (scoreJ != 3) {
            scoreJ++;
          }
          break;

        case boardValues[r][cc].getValue() != false: //means spot is not empty/tie
          if (cc < 2) {
            cc++;
          } else if (cc === 2 && r != 2) {
            r++;
            cc = 0;
          } else if (cc == 2 && r == 2) {
            end = "tie";
          }
          break;

        default:
          end = "no"; //means a spot if still empty

          break;
      }
    }
    if (
      scoreA === 3 ||
      scoreB === 3 ||
      scoreC === 3 ||
      scoreD === 3 ||
      scoreE === 3 ||
      scoreF === 3 ||
      scoreG === 3 ||
      scoreJ === 3
    ) {
      end = "yes";
    } else if (end === "no") {
      return end;
    } else end = "tie";
  };

  const playRound = (column, row) => {
    board.printLetter(column, row, getActivePlayer().letter);
    checkForWinner(getActivePlayer().letter);
    endGame(checkEnd(), getActivePlayer().name);
    //switchPlayersTurn();
  };

  return {
    getActivePlayer,
    switchPlayersTurn,
    playRound,
    getBoard: board.getBoard,
  };
};

const ScreenController = () => {
  const game = controlFlow();
  const boardDiv = document.querySelector(".board");
  //const startButton = document.querySelector(".Start");
  const restartButton = document.querySelector(".Restart");

  const updateScreen = () => {
    //get newest version of board and player turn
    boardDiv.textContent = "";
    const gameLayOut = game.getBoard();
    const activePlayer = game.getActivePlayer;

    //Render board squares
    gameLayOut.forEach((row, index1) => {
      row.forEach((column, index) => {
        //for each emtpy array in the gameBoard add button
        const cell = document.createElement("button");
        cell.classList.add("cell");
        //Create a data attribute to identify the column
        //Makes it easier to know which square to change
        cell.dataset.row = index1;
        cell.dataset.column = index;
        cell.textContent = column.getValue();
        boardDiv.appendChild(cell);
      });
    });
  };

  const getUpdateScreen = () => updateScreen;

  //Add event listener for the board
  function clickCell(e) {
    const selectedColumn = e.target.dataset.column;
    const selectedRow = e.target.dataset.row;
    //make sure i've clicked a column and the gaps in between
    if (!selectedColumn) return;

    game.playRound(selectedColumn, selectedRow);
    updateScreen();
  }
  //add event listener to buttons aka cells
  boardDiv.addEventListener("click", clickCell);

  //what happens when restart button is pressed
  const restart = () => {
    const turnDisplay = document.querySelector(".turn");
    turnDisplay.innerText = "Game Reset" + playerOne + "'s turn";
    let button = document.querySelectorAll(".cell");
    button.forEach(function (cell) {
      cell.innerText = "";
    });

    ScreenController();
  };

  //restart button
  restartButton.addEventListener("click", restart);
  return { restart, updateScreen, getUpdateScreen };
};

//press start button to start game
function startGame() {
  //gets updateScreen function
  const controlScreen = ScreenController();
  const updateScreenz = controlScreen.updateScreen;

  //gets start button
  const startButton = document.querySelector(".Start");

  //listener is invoked once once true listener is taken off
  startButton.addEventListener(
    "click",
    () => {
      updateScreenz();
      console.log("ran once");
    },
    { once: true }
  );
}

ScreenController();
startGame();
