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
  const segmentsString = exampleShip.getSegments().toString();
  expect(segmentsString).toBe("41,51,61,71");
});

test("Ship takes damage", () => {
  exampleShip.takeDamage();
  expect(exampleShip.getHP()).toBe(3);
});

test("CheckIfBlownUp identifies unblownUp ship", () => {
  expect(exampleShip.checkIfBlownUp()).toBe(false);
});

test("CheckIfBlownUp identifies blown up ship", () => {
  exampleShip.takeDamage();
  exampleShip.takeDamage();
  exampleShip.takeDamage();
  expect(exampleShip.checkIfBlownUp()).toBe(true);
});

test("Doing damage to  an already blown up ship throws error", () => {
  expect(exampleShip.takeDamage()).toBe(
    "Error: This ship is already blown up!"
  );
});

test("all tests written", () => {
  expect(true).toBe(true);
});
