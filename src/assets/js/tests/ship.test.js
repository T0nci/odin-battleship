import Ship from "../ship";

test("Ship creates an object", () => {
  const ship = new Ship(2);
  expect(ship.length).toBe(2);
  expect(ship.hits).toBe(0);
});

test("Ship throws error when length isn't specified", () => {
  expect(() => new Ship()).toThrow("Ship class expects a numeric length!");
});

test("Ship throws error when length isn't a number", () => {
  expect(() => new Ship("blah")).toThrow(
    "Ship class expects a numeric length!",
  );
});

test("hit function of a Ship instance increases number of hits", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit();
  expect(ship.hits).toBe(2);
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(4);
});

test("isSunk function returns if a Ship instance is sunk", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
