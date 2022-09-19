/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { player1Gameboard } from "./battleship";

test.skip("shows name", () => {
  expect(player1Battleship.getName()).toBe("Battleship");
});

test.skip("shows HP", () => {
  expect(player1Battleship.getHP()).toBe(5);
});

test.skip("shows damage from getting hit", () => {
  player1Battleship.takeDamage();
  expect(player1Battleship.getHP()).toBe(4);
});

test.skip("gets sunk", () => {
  player1Battleship.takeDamage();
  player1Battleship.takeDamage();
  player1Battleship.takeDamage();
  player1Battleship.takeDamage();
  expect(player1Battleship.isSunk()).toBe(true);
});

test.skip("occupied square recognizes its ship", () => {
  expect(player1Gameboard.getSquares()[69].getShip()).toBe(player1Battleship);
});

test("gameboard processes missed attack", () => {
  expect(player1Gameboard.receiveAttack(22)).toBe("You missed!");
});

test("gameboard processes hit attack", () => {
  expect(player1Gameboard.receiveAttack(26)).toBe("You hit!");
});

test("sinking all ships wins game", () => {
  player1Gameboard.receiveAttack(26);
  player1Gameboard.sinkShip(player1AircraftCarrier);
  player1Gameboard.sinkShip(player1Cruiser);
  player1Gameboard.sinkShip(player1Frigate);
  expect(player1Gameboard.sinkShip(player1Frigate)).toBe("You win!");
});
