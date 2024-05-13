import "./../css/style.css";

import Ship from "./ship";
import Gameboard from "./gameboard";
import Player from "./player";
import { Computer } from "./player";

import DOM from "./dom";

function checkIfLost(player) {
  return player.gameboard.areAllShipsSunk();
}

function playComputerTurn(gameState, player, computer) {
  const options = {};
  let coordinates = [];
  let attack = null;
  do {
    coordinates = computer.randomCoordinates();

    attack = player.gameboard.receiveAttack(coordinates);
  } while (attack === null);

  if (attack === true) {
    const ship =
      player.gameboard.gameboard[coordinates[0]][coordinates[1]].ship;

    if (ship.isSunk()) {
      options.sunk = ship.name;
    } else options.hit = ship.name;
  }

  // If computer won
  if (checkIfLost(player)) {
    DOM.endGame(computer, player, options);
    return;
  }

  // If it's a miss then pass in empty options
  DOM.changeGameState(computer, player, options);
  gameState.turn = player;
  DOM.renderBoards(player.gameboard.gameboard, computer.gameboard.gameboard);
}

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

  // If player won
  if (checkIfLost(computer)) {
    DOM.endGame(player, computer, options);
    return;
  }

  // If it's a miss then pass in empty options
  DOM.changeGameState(player, computer, options);
  gameState.turn = computer;
  DOM.renderBoards(player.gameboard.gameboard, computer.gameboard.gameboard);

  setTimeout(() => {
    playComputerTurn(gameState, player, computer);
  }, 2 * 1000);
}

function playGame() {
  const player = new Player("1");
  const computer = new Computer("Computer");

  DOM.renderBoards(player.gameboard.gameboard, computer.gameboard.gameboard);

  const gameState = { turn: player };

  document.querySelector(".game-state > .turn").textContent =
    `${player.name}'s Turn`;

  document
    .querySelector(".place-ships > .randomize")
    .addEventListener("click", () => {
      // Called it like this because it will benefit not repeating code
      // when creating 2 player mode
      gameState.turn.gameboard.randomizeShips();

      DOM.renderBoards(
        player.gameboard.gameboard,
        computer.gameboard.gameboard,
      );
    });

  document
    .querySelector(".place-ships > .ready")
    .addEventListener("click", (e) => {
      // Disable the buttons so the user can't interfere
      const ready = e.currentTarget;
      const randomize = ready.parentNode.querySelector(".randomize");
      ready.disabled = true;
      randomize.disabled = true;
      ready.classList.add("disabled");
      randomize.classList.add("disabled");

      computer.gameboard.randomizeShips();

      DOM.renderBoards(
        player.gameboard.gameboard,
        computer.gameboard.gameboard,
      );

      document
        .querySelector(".boards > .board-space > .enemy-board")
        .addEventListener("click", (e) => {
          // Makes sure the target is a cell and not a border or gap
          if (!e.target.classList.contains("cell")) return;

          playTurn(
            e.target.dataset.coordinates
              .split(",")
              .map((value) => parseInt(value)),
            gameState,
            player,
            computer,
          );
        });
    });
}

export default playGame;
