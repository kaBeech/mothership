/* eslint-disable no-undef */
import { battleship, player1Gameboard } from "./battleship";

test("shows name", () => {
  expect(battleship.getName()).toBe("Battleship");
});

test("shows HP", () => {
  expect(battleship.getHP()).toBe(5);
});

test.skip("shows damage from getting hit", () => {
  battleship.hit();
  expect(battleship.getHP()).toBe(4);
});

test.skip("gets sunk", () => {
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});

test("occupied square recognizes its ship", () => {
  expect(player1Gameboard.getSquares()[69].getShip()).toBe(battleship);
});

test("gameboard processes missed attack", () => {
  expect(player1Gameboard.receiveAttack(20)).toBe("You missed!");
});

test("gameboard processes hit attack", () => {
  player1Gameboard.receiveAttack(69);
  expect(battleship.getHP()).toBe(4);
});
