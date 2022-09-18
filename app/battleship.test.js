/* eslint-disable no-undef */
import battleship from "./battleship";

test("shows name", () => {
  expect(battleship.getName()).toBe("Battleship");
});

test("shows HP", () => {
  expect(battleship.getHP()).toBe(5);
});

test("gets hit", () => {
  expect(battleship.hit(6, 9), battleship.getHP()).toBe(4);
});
