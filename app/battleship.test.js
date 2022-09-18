/* eslint-disable no-undef */
import battleship from "./battleship";

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

test("gets sunk", () => {
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  battleship.hit();
  expect(battleship.isSunk()).toBe(true);
});
