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

export default Player;
