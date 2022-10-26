import gameController from "./gameController";

const player1 = gameController.getCurrentPlayer();
const player0 = gameController.getOpposingPlayer();

test("gets gameInProgress", () => {
  expect(gameController.getGameInProgress()).toBe(false);
});

test("sets gameInProgress", () => {
  gameController.setGameInProgress(true);
  expect(gameController.getGameInProgress()).toBe(true);
});

test("gets currentPlayer", () => {
  expect(gameController.getCurrentPlayer().getID()).toBe("player1");
});

test("gets opposingPlayer", () => {
  expect(gameController.getOpposingPlayer().getID()).toBe("player0");
});

test("sets currentPlayer", () => {
  gameController.setCurrentPlayer(player0);
  expect(gameController.getCurrentPlayer().getID()).toBe("player0");
});

test("sets opposingPlayer", () => {
  gameController.setOpposingPlayer(player1);
  expect(gameController.getOpposingPlayer().getID()).toBe("player1");
});

test("controller recognizes miss", () => {
  expect(gameController.evalTurn("32")).toBe("Miss");
});

test("controller recognizes hit", () => {
  expect(gameController.evalTurn("28")).toBe("Hit");
});

test("all tests written", () => {
  expect(true).toBe(true);
});
