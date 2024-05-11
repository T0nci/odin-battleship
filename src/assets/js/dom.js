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

function changeGameState(player, info) {
  const turnDiv = document.querySelector(".game-state > .turn");
  const gameEventDiv = document.querySelector(".game-state > .game-event");

  turnDiv.textContent = `${player.name}'s Turn`;

  if (info.hit) gameEventDiv.textContent = `${info.hit} was hit!`;
  else if (info.sunk) gameEventDiv.textContent = `${info.sunk} was sunk!`;
  else gameEventDiv.textContent = "Miss!";
}

export default {
  renderBoards,
  changeGameState,
};
