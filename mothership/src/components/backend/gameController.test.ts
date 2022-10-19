/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gameController from "./gameController";

// test.skip("shows name", () => {
//   expect(player1Battleship.getName()).toBe("Battleship");
// });

// test.skip("shows HP", () => {
//   expect(player1Battleship.getHP()).toBe(5);
// });

// test.skip("shows damage from getting hit", () => {
//   player1Battleship.takeDamage();
//   expect(player1Battleship.getHP()).toBe(4);
// });

// test.skip("gets sunk", () => {
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   expect(player1Battleship.isSunk()).toBe(true);
// });

// test.skip("occupied square recognizes its ship", () => {
//   expect(player1Gameboard.getSquares()[69].getShip()).toBe(player1Battleship);
// });

// test.skip("gameboard processes missed attack", () => {
//   expect(player1Gameboard.receiveAttack(22)).toBe("You missed!");
// });

// test.skip("gameboard processes hit attack", () => {
//   expect(player1Gameboard.receiveAttack(26)).toBe("You hit!");
// });

// test.skip("sinking all ships wins game", () => {
//   player1Gameboard.receiveAttack(26);
//   player1Gameboard.sinkShip(player1AircraftCarrier);
//   player1Gameboard.sinkShip(player1Cruiser);
//   player1Gameboard.sinkShip(player1Frigate);
//   expect(player1Gameboard.sinkShip(player1Frigate)).toBe("You win!");
// });

// test.skip("player can make moves", () => {
//   expect(player0.attack("28")).toBe("You hit!");
// });

// test.skip("player can attack randomly", () => {
//   expect(player0.attackRandomly()).toBe("You missed!");
// });

const player1 = gameController.getCurrentPlayer();
const player0 = gameController.getOpposingPlayer();

test("gets gameInProgress", () => {
  expect(gameController.getGameInProgress()).toBe(false);
});

test("sets gameInProgress", () => {
  gameController.setGameInProgress(true);
  expect(gameController.getGameInProgress()).toBe(true);
});

// test("setting gameInProgress with no arguments throws error", () => {
//   expect(gameController.setGameInProgress()).toBe("error: needs an argument");
// });

// test("setting gameInProgress with non-boolean argument throws error", () => {
//   expect(gameController.setGameInProgress("string")).toBe(
//     "error: needs a boolean argument"
//   );
// });

test("gets currentPlayer", () => {
  expect(gameController.getCurrentPlayer().getID()).toBe("player1");
});

test("gets opposingPlayer", () => {
  expect(gameController.getOpposingPlayer().getID()).toBe("player0");
});

// test("setting currentPlayer with no arguments throws error", () => {
//   expect(gameController.setCurrentPlayer()).toBe("error: needs an argument");
// });

// test("setting currentPlayer with non-player argument throws error", () => {
//   expect(gameController.setCurrentPlayer()).toBe(
//     "error: needs a player argument"
//   );
// });

test("sets currentPlayer", () => {
  gameController.setCurrentPlayer(player0);
  expect(gameController.getCurrentPlayer().getID()).toBe("player0");
});

test("sets opposingPlayer", () => {
  gameController.setOpposingPlayer(player1);
  expect(gameController.getOpposingPlayer().getID()).toBe("player1");
});

// test("setting opposingPlayer with no arguments throws error", () => {
//   expect(gameController.setOpposingPlayer()).toBe("error: needs an argument");
// });

// test("setting opposingPlayer with non-player argument throws error", () => {
//   expect(gameController.setOpposingPlayer()).toBe(
//     "error: needs a player argument"
//   );
// });

test("controller recognizes miss", () => {
  expect(gameController.evalTurn("32")).toBe("miss");
});

test("controller recognizes hit", () => {
  expect(gameController.evalTurn("28")).toBe("hit");
});

test("all tests written", () => {
  expect(true).toBe(true);
});
