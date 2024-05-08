import Ship from "./ship";

class Gameboard {
  constructor(shipInfo) {
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

  placeShip(coordinates, length, direction) {
    if (
      typeof coordinates[0] !== "number" ||
      coordinates[0] > 10 ||
      coordinates[0] < 0 ||
      typeof coordinates[1] !== "number" ||
      coordinates[1] > 10 ||
      coordinates[1] < 0 ||
      typeof length !== "number" ||
      length < 1
    )
      return false;

    const finalCoordinates = [];

    for (let i = 0; i < length; i++) {
      const coordinate = [];

      if (direction === "horizontal") {
        coordinate.push(coordinates[0], coordinates[1] + i);
      } else if (direction === "vertical") {
        coordinate.push(coordinates[0] + i, coordinates[1]);
      }

      if (
        coordinate[0] > 9 ||
        coordinate[1] > 9 ||
        this.gameboard[coordinate[0]][coordinate[1]] !== 0
      ) {
        return false;
      }

      finalCoordinates.push(coordinate);
    }

    const ship = new Ship(length);
    finalCoordinates.forEach((value) => {
      this.gameboard[value[0]][value[1]] = {
        ship,
        hit: false,
      };
    });

    return true;
  }
}

export default Gameboard;
