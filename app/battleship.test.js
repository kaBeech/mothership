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

test("gameboard processes missed attack", () => {
  player1Gameboard.receiveAttack(69);
  expect(battleship.getHP).toBe(4);
});

test("gameboard processes hit attack", () => {
  player1Gameboard.receiveAttack(69);
  expect(battleship.getHP).toBe(4);
});
