import Gameboard from "./Gameboard";
import Player from "./Player";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player0Gameboard = Gameboard();
player0Gameboard.init();

const player1 = Player(
  "Alice",
  "player1",
  player1Gameboard,
  player0Gameboard,
  "computer"
);

test("getName gets name", () => {
  expect(player1.getName()).toBe("Alice");
});

test("getID gets id", () => {
  expect(player1.getID()).toBe("player1");
});

test("getSpecies gets species", () => {
  expect(player1.getSpecies()).toBe("computer");
});

test("getOpposingGameboard gets opposing gameboard", () => {
  expect(player1.getOpposingGameboard()).toBe(player0Gameboard);
});

test("getPossibleMoves gets 100 squares", () => {
  expect(player1.getPossibleMoves().length).toBe(100);
});

test("removePossibleMove removes square from possibleMoves", () => {
  const targetSquare = player1.getOpposingGameboard().getSquares()["94"];
  player1.removePossibleMove("94");
  expect(player1.getPossibleMoves().indexOf(targetSquare)).toBe(-1);
});

test("attacking a valid targetSquare returns targetSquareName", () => {
  expect(player1.attack("29")).toBe("29");
});

test("attacking removes targetSquare from possibleMoves", () => {
  const targetSquare = player1.getOpposingGameboard().getSquares()["29"];
  player1.attack("29");
  expect(player1.getPossibleMoves().indexOf(targetSquare)).toBe(-1);
});

test("attacking a square not in possibleMoves throws an error", () => {
  expect(player1.attack("94")).toBe(
    "Error - target square not found in possibleMoves"
  );
});

test("attacking randomly returns a possibleMove", () => {
  const frozenPossibleMoves = player1.getPossibleMoves().slice();
  const targetSquare = player1.getOpposingGameboard().getSquares()[
    player1.attackRandomly()
  ];
  expect(frozenPossibleMoves.includes(targetSquare)).toBe(true);
});

test("all tests written", () => {
  expect(true).toBe(true);
});
