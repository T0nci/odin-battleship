class Ship {
  #length;
  #hits;
  #name;

  constructor(length, name) {
    if (typeof length !== "number")
      throw new Error("Ship class expects a numeric length!");
    if (typeof name !== "string") throw new Error("Ship class expects a name!");

    this.#length = length;
    this.#hits = 0;
    this.#name = name;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  get name() {
    return this.#name;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    return !(this.hits < this.length);
  }
}

export default Ship;
