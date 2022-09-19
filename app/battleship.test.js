/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import {
  player1AircraftCarrier,
  player1Battleship,
  player1Cruiser,
  player1Frigate,
  player1Submarine,
  player1Gameboard,
} from "./battleship";

test("shows name", () => {
  expect(player1Battleship.getName()).toBe("Battleship");
});

test("shows HP", () => {
  expect(player1Battleship.getHP()).toBe(5);
});

test("shows damage from getting hit", () => {
  player1Battleship.takeDamage();
  expect(player1Battleship.getHP()).toBe(4);
});

test("gets sunk", () => {
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
  expect(player1Gameboard.receiveAttack(22)).toBe("You missed!");
});

test("gameboard processes hit attack", () => {
  player1Gameboard.receiveAttack(26);
  expect(player1Submarine.getHP()).toBe(1);
});

test("sinking all ships wins game", () => {
  player1Gameboard.receiveAttack(26);
  player1Gameboard.sinkShip(player1AircraftCarrier);
  player1Gameboard.sinkShip(player1Cruiser);
  player1Gameboard.sinkShip(player1Frigate);
  expect(player1Gameboard.sinkShip(player1Frigate)).toBe("You win!");
});
