import Player from "../player";
import { Computer } from "../player";

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

test("Computer class throws error when there is no name or name isn't a string", () => {
  expect(() => new Computer()).toThrow("Name of the player must be specified!");
  expect(() => new Computer(null)).toThrow(
    "Name of the player must be specified!",
  );
  expect(() => new Computer(2)).toThrow(
    "Name of the player must be specified!",
  );
});

test("Computer class successfully creates an instance", () => {
  const computer = new Computer("example");
  expect(computer.name).toBe("example");
  expect(typeof computer.gameboard).toBe("object");
  expect(Array.isArray(computer.moves)).toBe(true);
});
