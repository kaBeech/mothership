import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Square from "./Square";

const exampleSquare = Square("24");

test("initializing returns correct string", () => {
  expect(exampleSquare.getName()).toBe("24");
});

test("getShip returns null properly", () => {
  expect(exampleSquare.getShip()).toBe(null);
});

test("setShip sets ship", () => {
  exampleSquare.setShip(
    Ship("Mothership", Gameboard(), ["22", "23", "24", "25", "26", "27"])
  );
  expect(exampleSquare.getShip()?.getName()).toBe("Mothership");
});

test("checkGuessed returns false properly", () => {
  expect(exampleSquare.checkGuessed()).toBe(false);
});

test("setGuessed sets guessed", () => {
  exampleSquare.setGuessed(true);
  expect(exampleSquare.checkGuessed()).toBe(true);
});
