import Gameboard from "../gameboard";

test("placeShip function returns false and doesn't place ship when coordinates are bad or spaces are occupied or length isn't specified", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip([10, -1], 2, "horizontal")).toBe(false);
  expect(gameboard.placeShip([0, 10], 2, "horizontal")).toBe(false);
  expect(gameboard.placeShip([9, 9], 2, "horizontal")).toBe(false);
  expect(gameboard.placeShip([9, 9], 2, "vertical")).toBe(false);
});

test("placeShip places ship", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip([0, 0], 2, "horizontal")).toBe(true);
  expect(typeof gameboard.gameboard[0][0]).toBe("object");
  expect(typeof gameboard.gameboard[0][1]).toBe("object");
  expect(typeof gameboard.gameboard[0][2]).toBe("number");
  expect(typeof gameboard.gameboard[1][0]).toBe("number");
});

test("receiveAttack returns null when coordinate is invalid", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack([0, 10])).toBe(null);
  expect(gameboard.receiveAttack([10, 0])).toBe(null);
});

test("receiveAttack correctly hits a water and a ship spot and refuses an already visited spot", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip([0, 0], 2, "horizontal");
  expect(gameboard.receiveAttack([0, 0])).toBe(true);
  expect(gameboard.receiveAttack([1, 0])).toBe(false);
  expect(gameboard.receiveAttack([1, 0])).toBe(null);
});
