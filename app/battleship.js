import Ship from "./Ship";
import Gameboard from "./Gameboard";

const player1Gameboard = Gameboard();
player1Gameboard.init();
const player1AircraftCarrier = Ship("Aircraft Carrier", player1Gameboard, [
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
]);
player1AircraftCarrier.placeShip();
const player1Battleship = Ship("Battleship", player1Gameboard, [
  "29",
  "39",
  "49",
  "59",
  "69",
]);
player1Battleship.placeShip();
const player1Cruiser = Ship("Cruiser", player1Gameboard, [
  "28",
  "38",
  "48",
  "58",
]);
player1Cruiser.placeShip();
const player1Frigate = Ship("Gunboat", player1Gameboard, ["27", "37", "47"]);
player1Frigate.placeShip();
const player1Submarine = Ship("Submarine", player1Gameboard, ["26", "36"]);
player1Submarine.placeShip();

export {
  player1AircraftCarrier,
  player1Battleship,
  player1Cruiser,
  player1Frigate,
  player1Submarine,
  player1Gameboard,
};
