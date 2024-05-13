import Ship from "./ship";

function validateCoordinate(coordinate) {
  if (
    typeof coordinate[0] !== "number" ||
    coordinate[0] > 9 ||
    coordinate[0] < 0 ||
    typeof coordinate[1] !== "number" ||
    coordinate[1] > 9 ||
    coordinate[1] < 0
  )
    return false;

  return true;
}

const ships = {
  Carrier: 5,
  Battleship: 4,
  Destroyer: 3,
  Submarine: 3,
  "Patrol Boat": 2,
};

function createRandomShip(name) {
  const length = ships[name];

  const direction =
    Math.floor(Math.random() * 2) < 1 ? "horizontal" : "vertical";

  const coordinates = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  return [coordinates, length, direction, name];
}

class Gameboard {
  constructor() {
    this.gameboard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  placeShip(coordinates, length, direction, name) {
    const directions = ["horizontal", "vertical"];
    if (
      !validateCoordinate(coordinates) ||
      typeof length !== "number" ||
      length < 1 ||
      !directions.includes(direction) ||
      typeof name !== "string"
    )
      return false;

    const finalCoordinates = [];

    for (let i = 0; i < length; i++) {
      const coordinate = [];

      if (direction === "horizontal") {
        coordinate.push(coordinates[0], coordinates[1] + i);
      } else {
        coordinate.push(coordinates[0] + i, coordinates[1]);
      }

      if (
        !validateCoordinate(coordinate) ||
        this.gameboard[coordinate[0]][coordinate[1]] !== 0
      ) {
        return false;
      }

      finalCoordinates.push(coordinate);
    }

    const ship = new Ship(length, name);
    finalCoordinates.forEach((value) => {
      this.gameboard[value[0]][value[1]] = {
        ship,
        hit: false,
      };
    });

    return true;
  }

  receiveAttack(coordinate) {
    if (!validateCoordinate(coordinate)) return null;

    const spot = this.gameboard[coordinate[0]][coordinate[1]];
    if (typeof spot === "object") {
      if (spot.hit === false) {
        spot.hit = true;
        spot.ship.hit();

        return true;
      } else return null;
    } else {
      if (spot === 0) {
        this.gameboard[coordinate[0]][coordinate[1]] = 1;
        return false;
      } else return null;
    }
  }

  areAllShipsSunk() {
    for (const row of this.gameboard) {
      for (const spot of row) {
        if (typeof spot === "object" && spot.hit === false) {
          return false;
        }
      }
    }

    return true;
  }

  resetBoard() {
    this.gameboard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
  }

  randomizeShips() {
    this.resetBoard();

    for (const ship in ships) {
      let shipPlaced = false;

      while (shipPlaced === false) {
        shipPlaced = this.placeShip(...createRandomShip(ship));
      }
    }
  }
}

export default Gameboard;
