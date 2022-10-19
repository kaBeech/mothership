import Gameboard from "./Gameboard";
import Ship from "./Ship";

const player0Gameboard = Gameboard();
player0Gameboard.init();
const exampleShip = player0Gameboard.addShip("Cruiser", [
  "41",
  "51",
  "61",
  "71",
]);

test("getName gets name", () => {
  expect(exampleShip.getName()).toBe("Cruiser");
});

test("getHP gets hp", () => {
  expect(exampleShip.getHP()).toBe(4);
});

test("all tests written", () => {
  expect(Ship).toBe(
    "don't change this until tests have been added for all public methods"
  );
});
