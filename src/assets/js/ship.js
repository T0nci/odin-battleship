class Ship {
  #length;
  #hits;

  constructor(length) {
    if (typeof length !== "number")
      throw new Error("Ship class expects a numeric length!");

    this.#length = length;
    this.#hits = 0;
  }

  get length() {
    return this.#length;
  }

  get hits() {
    return this.#hits;
  }

  hit() {
    this.#hits += 1;
  }

  isSunk() {
    return !(this.hits < this.length);
  }
}

export default Ship;
