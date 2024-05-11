import "./../css/style.css";

import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";

import DOM from "./dom";

function playTurn(coordinates, gameState, player, computer) {
  if (gameState.turn !== player) return;

  const attack = computer.gameboard.receiveAttack(coordinates);
  const options = {};

  if (attack === null) return;
  else if (attack === true) {
    const ship =
      computer.gameboard.gameboard[coordinates[0]][coordinates[1]].ship;

    if (ship.isSunk()) {
      options.sunk = ship.name;
    } else options.hit = ship.name;
  }

  // If it's a miss then pass in empty options
  DOM.changeGameState(computer, options);
  gameState.turn = computer;
  DOM.renderBoards(player.gameboard.gameboard, computer.gameboard.gameboard);
}

function playGame() {
  const player = new Player("1");
  const computer = new Player("2");

  player.gameboard.placeShip([0, 0], 2, "horizontal", "Patrol Boat");
  player.gameboard.placeShip([1, 0], 3, "horizontal", "Submarine");
  player.gameboard.placeShip([2, 0], 3, "horizontal", "Destroyer");
  player.gameboard.placeShip([0, 9], 4, "vertical", "Battleship");
  player.gameboard.placeShip([3, 0], 5, "horizontal", "Carrier");
  player.gameboard.receiveAttack([0, 0]);
  player.gameboard.receiveAttack([0, 1]);
  player.gameboard.receiveAttack([0, 2]);
  player.gameboard.receiveAttack([0, 0]);

  computer.gameboard.placeShip([0, 0], 2, "horizontal", "Patrol Boat");
  computer.gameboard.placeShip([1, 0], 3, "horizontal", "Submarine");
  computer.gameboard.placeShip([2, 0], 3, "horizontal", "Destroyer");
  computer.gameboard.placeShip([0, 9], 4, "vertical", "Battleship");
  computer.gameboard.placeShip([3, 0], 5, "horizontal", "Carrier");
  computer.gameboard.receiveAttack([0, 8]);
  computer.gameboard.receiveAttack([8, 2]);
  computer.gameboard.receiveAttack([3, 3]);
  computer.gameboard.receiveAttack([6, 4]);

  DOM.renderBoards(player.gameboard.gameboard, computer.gameboard.gameboard);

  const gameState = { turn: player };

  // When ready button gets clicked start the game
  document
    .querySelector(".boards > .board-space > .enemy-board")
    .addEventListener("click", (e) => {
      // Makes sure the target is a cell and not a border or gap
      if (!e.target.classList.contains("cell")) return;

      playTurn(
        e.target.dataset.coordinates.split(",").map((value) => parseInt(value)),
        gameState,
        player,
        computer,
      );
    });
}

export default playGame;
