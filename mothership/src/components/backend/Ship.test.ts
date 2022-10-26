import Gameboard from "./Gameboard";
import Ship from "./Ship";

const exampleGameboard = Gameboard();
exampleGameboard.init();
const exampleShip = Ship("Cruiser", exampleGameboard, ["41", "51", "61", "71"]);

test("Gets name", () => {
  expect(exampleShip.getName()).toBe("Cruiser");
});

test("Gets hp", () => {
  expect(exampleShip.getHP()).toBe(4);
});

test("Gets segments", () => {
  expect(exampleShip.getSegments()).toBe(["41", "51", "61", "71"]);
});

test("Ship takes damage", () => {
  exampleShip.takeDamage();
  expect(exampleShip.getHP()).toBe(3);
});

test("CheckIfSunk identifies unsunk ship", () => {
  expect(exampleShip.checkIfSunk()).toBe(false);
});

test("CheckIfSunk identifies sunk ship", () => {
  exampleShip.takeDamage();
  exampleShip.takeDamage();
  exampleShip.takeDamage();
  expect(exampleShip.checkIfSunk()).toBe(true);
});

test("all tests written", () => {
  expect(true).toBe(true);
});
