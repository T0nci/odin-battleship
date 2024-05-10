import "./assets/css/style.css";

import Ship from "./assets/js/ship";
import Gameboard from "./assets/js/gameboard";
import Player from "./assets/js/player";

import DOM from "./assets/js/dom";

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
