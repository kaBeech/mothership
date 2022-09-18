/* eslint-disable no-undef */
import battleship from "./battleship";

test("gets name", () => {
  expect(battleship.getName()).toBe("Battleship");
});
