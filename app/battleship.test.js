/* eslint-disable no-undef */
import battleship from "./battleship";

test("shows name", () => {
  expect(battleship.getName()).toBe("Battleship");
});

test("shows HP", () => {
  expect(battleship.getHP()).toBe(5);
});

test("shows damage from getting hit", () => {
  battleship.hit(69);
  expect(battleship.getHP()).toBe(4);
});
