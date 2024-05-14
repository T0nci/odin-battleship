import "./../css/style.css";

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
    if (computer.moves.length > 0) {
      const move = computer.moves.shift();

      if (!move.ship.isSunk()) {
        coordinates = move.coordinates;
      }
    } else {
      // If there aren't any moves in the computer's queue
      coordinates = computer.randomCoordinates();
    }

    // Attack once we get random coordinates or coordinates from the queue
    attack = player.gameboard.receiveAttack(coordinates);
  } while (attack === null);

  if (attack === true) {
    const ship =
      player.gameboard.gameboard[coordinates[0]][coordinates[1]].ship;

    if (ship.isSunk()) {
      options.sunk = ship.name;
    } else {
      options.hit = ship.name;
      computer.moves.push(
        {
          ship,
          coordinates: [coordinates[0] - 1, coordinates[1]],
        },
        {
          ship,
          coordinates: [coordinates[0] + 1, coordinates[1]],
        },
        {
          ship,
          coordinates: [coordinates[0], coordinates[1] - 1],
        },
        {
          ship,
          coordinates: [coordinates[0], coordinates[1] + 1],
        },
      );
    }
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

function playTurn(coordinates, gameState, player1, player2) {
  if (gameState.turn !== player1) return;

  const attack = player2.gameboard.receiveAttack(coordinates);
  const options = {};

  if (attack === null) return;
  else if (attack === true) {
    const ship =
      player2.gameboard.gameboard[coordinates[0]][coordinates[1]].ship;

    if (ship.isSunk()) {
      options.sunk = ship.name;
    } else options.hit = ship.name;
  }

  // If player won
  if (checkIfLost(player2)) {
    DOM.endGame(player1, player2, options);
    return;
  }

  // If it's a miss then pass in empty options
  DOM.changeGameState(player1, player2, options);
  DOM.renderBoards(player1.gameboard.gameboard, player2.gameboard.gameboard);

  // If the second player is a computer
  if (player2 instanceof Computer) {
    gameState.turn = player2;

    setTimeout(() => {
      playComputerTurn(gameState, player1, player2);
    }, 2 * 1000);
  } else {
    // Change the state to null so the current player can't play multiple times
    gameState.turn = null;

    setTimeout(() => {
      // Moved this here cuz switching the turn too early(before the callback
      // from the other addEventListener) causes some not needed side-effects -
      // the game messes up by playing 2 turns wrongfully in multiplayer mode.
      // Changing it after the second player's callback as a setTimeout
      // callback is needed.
      gameState.turn = player2;

      DOM.switchScreen();
      DOM.renderBoards(
        player2.gameboard.gameboard,
        player1.gameboard.gameboard,
      );

      setTimeout(() => {
        DOM.switchScreen();
      }, 5 * 1000);
    }, 3 * 1000);
  }
}

function playGame(mode) {
  const player1 = new Player("Player 1");
  let player2;
  if (mode === "multiplayer") player2 = new Player("Player 2");
  else player2 = new Computer("Computer");

  DOM.renderBoards(player1.gameboard.gameboard, player2.gameboard.gameboard);

  const gameState = { turn: player1 };

  document.querySelector(".game-state > .turn").textContent =
    `${player1.name}'s Turn`;

  document
    .querySelector(".place-ships > .randomize")
    .addEventListener("click", () => {
      // Called it like this because it will benefit not repeating code
      // when creating 2 player mode
      gameState.turn.gameboard.randomizeShips();

      let tempPlayer1, tempPlayer2;
      if (player1 === gameState.turn) {
        tempPlayer1 = player1;
        tempPlayer2 = player2;
      } else {
        tempPlayer1 = player2;
        tempPlayer2 = player1;
      }

      DOM.renderBoards(
        tempPlayer1.gameboard.gameboard,
        tempPlayer2.gameboard.gameboard,
      );
    });

  document
    .querySelector(".place-ships > .ready")
    .addEventListener("click", (e) => {
      // Disable the buttons so the user can't interfere
      DOM.switchReadyButton("disable");

      // If the second player is a computer initiate the game
      if (player2 instanceof Computer) {
        player2.gameboard.randomizeShips();

        DOM.renderBoards(
          player1.gameboard.gameboard,
          player2.gameboard.gameboard,
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
              player1,
              player2,
            );
          });
      } else if (player2.gameboard.areAllShipsSunk()) {
        // Else if it's another player that's not ready, enable ready for him
        gameState.turn = player2;
        document.querySelector(".game-state > .turn").textContent =
          `${player2.name}'s Turn`;

        DOM.switchScreen();
        DOM.renderBoards(
          player2.gameboard.gameboard,
          player1.gameboard.gameboard,
        );

        setTimeout(() => {
          DOM.switchScreen();
          DOM.switchReadyButton("enable");
        }, 5 * 1000);
      } else {
        // Else both players are ready and we can initiate the game
        gameState.turn = player1;
        document.querySelector(".game-state > .turn").textContent =
          `${player1.name}'s Turn`;

        DOM.switchScreen();
        DOM.renderBoards(
          player1.gameboard.gameboard,
          player2.gameboard.gameboard,
        );

        setTimeout(() => {
          DOM.switchScreen();
        }, 5 * 1000);

        // only difference between the 2 is the places of players
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
              player1,
              player2,
            );
          });

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
              player2,
              player1,
            );
          });
      }
    });
}

export default playGame;
