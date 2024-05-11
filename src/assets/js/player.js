import Gameboard from "./gameboard";

class Player {
  #name;

  constructor(name) {
    if (typeof name !== "string")
      throw new Error("Name of the player must be specified!");

    this.#name = name;
    this.gameboard = new Gameboard();
  }

  get name() {
    return this.#name;
  }
}

class Computer extends Player {
  constructor(name) {
    super(name);
    this.moves = [];
  }

  randomCoordinates() {
    return [Math.ceil(Math.random() * 10), Math.ceil(Math.random() * 10)];
  }
}

export default Player;
export { Computer };
