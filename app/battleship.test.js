/* eslint-disable no-undef */
import { player1Battleship, player1Gameboard } from "./battleship";

test("shows name", () => {
  expect(player1Battleship.getName()).toBe("Battleship");
});

test("shows HP", () => {
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
  player1Battleship.takeDamage();
  expect(player1Battleship.isSunk()).toBe(true);
});

test("occupied square recognizes its ship", () => {
  expect(player1Gameboard.getSquares()[69].getShip()).toBe(player1Battleship);
});

test("gameboard processes missed attack", () => {
  expect(player1Gameboard.receiveAttack(20)).toBe("You missed!");
});

test("gameboard processes hit attack", () => {
  player1Gameboard.receiveAttack(69);
  expect(player1Battleship.getHP()).toBe(4);
});
