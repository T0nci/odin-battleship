import Player from "../player";

test("Player class throws error when there is no name or name isn't a string", () => {
  expect(() => new Player()).toThrow("Name of the player must be specified!");
  expect(() => new Player(null)).toThrow(
    "Name of the player must be specified!",
  );
  expect(() => new Player(2)).toThrow("Name of the player must be specified!");
});

test("Player class successfully creates an instance", () => {
  const player = new Player("example");
  expect(player.name).toBe("example");
  expect(typeof player.gameboard).toBe("object");
});
