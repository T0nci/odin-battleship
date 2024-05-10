function renderBoards(cBoard, eBoard) {
  const currentBoard = document.querySelector(".board-space > .current-board");
  const enemyBoard = document.querySelector(".board-space > .enemy-board");

  currentBoard.textContent = "";
  enemyBoard.textContent = "";

  for (const row of cBoard) {
    for (const spot of row) {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (spot === 1) div.classList.add("water");
      else if (typeof spot === "object") {
        if (spot.hit === false) div.classList.add("ship-not-hit");
        else div.classList.add("ship");
      }

      currentBoard.appendChild(div);
    }
  }

  for (const row of eBoard) {
    for (const spot of row) {
      const div = document.createElement("div");
      div.classList.add("cell");

      if (spot === 1) div.classList.add("water");
      else if (typeof spot === "object" && spot.hit) div.classList.add("ship");

      enemyBoard.appendChild(div);
    }
  }
}

export default {
  renderBoards,
};
