function renderBoards(cBoard, eBoard) {
  const currentBoard = document.querySelector(".board-space > .current-board");
  const enemyBoard = document.querySelector(".board-space > .enemy-board");

  currentBoard.textContent = "";
  enemyBoard.textContent = "";

  for (let row = 0; row < cBoard.length; row++) {
    for (let column = 0; column < cBoard[row].length; column++) {
      const spot = cBoard[row][column];

      const div = document.createElement("div");
      div.classList.add("cell");
      div.dataset.coordinates = `${row},${column}`;

      if (spot === 1) div.classList.add("water");
      else if (typeof spot === "object") {
        if (spot.hit === false) div.classList.add("ship-not-hit");
        else div.classList.add("ship");
      }

      currentBoard.appendChild(div);
    }
  }

  for (let row = 0; row < eBoard.length; row++) {
    for (let column = 0; column < eBoard[row].length; column++) {
      const spot = eBoard[row][column];

      const div = document.createElement("div");
      div.classList.add("cell");
      div.dataset.coordinates = `${row},${column}`;

      if (spot === 1) div.classList.add("water");
      else if (typeof spot === "object" && spot.hit) div.classList.add("ship");

      enemyBoard.appendChild(div);
    }
  }
}

function changeGameState(prevPlayer, nextPlayer, info) {
  const turnDiv = document.querySelector(".game-state > .turn");
  const gameEventDiv = document.querySelector(".game-state > .game-event");

  turnDiv.textContent = `${nextPlayer.name}'s Turn`;

  if (info.hit)
    gameEventDiv.textContent = `${prevPlayer.name} hit the ${info.hit}!`;
  else if (info.sunk)
    gameEventDiv.textContent = `${prevPlayer.name} sunk the ${info.sunk}!`;
  else gameEventDiv.textContent = `${prevPlayer.name} missed!`;
}

function endGame(winner, loser, info) {
  // Announce the winner
  const turnDiv = document.querySelector(".game-state > .turn");
  const gameEventDiv = document.querySelector(".game-state > .game-event");

  turnDiv.textContent = `${winner.name} is the winner!`;

  gameEventDiv.textContent = `${winner.name} sunk the ${info.sunk}!`;

  // Disable the clicking(by removing the element with the event listener)
  const enemyBoard = document.querySelector(".board-space > .enemy-board");
  const enemySpace = enemyBoard.parentNode;

  enemySpace.removeChild(enemyBoard);

  const enemyBoardCopy = document.createElement("div");
  enemyBoardCopy.classList.add("board", "enemy-board");

  enemySpace.appendChild(enemyBoardCopy);

  if (winner.name === "Computer")
    renderBoards(loser.gameboard.gameboard, winner.gameboard.gameboard);
  else renderBoards(winner.gameboard.gameboard, loser.gameboard.gameboard);
}

export default {
  renderBoards,
  changeGameState,
  endGame,
};
