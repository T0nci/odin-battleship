import Gameboard from "../gameboard";

test("placeShip function returns false and doesn't place ship when coordinates are bad or spaces are occupied or length isn't specified", () => {
  const gameboard = new Gameboard();
  expect(gameboard.placeShip([11, -1], 2, "horizontal")).toBe(false);
  expect(gameboard.placeShip([0, 11], 2, "horizontal")).toBe(false);
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
