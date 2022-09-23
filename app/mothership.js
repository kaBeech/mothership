import Gameboard from "./Gameboard";
import Player from "./Player";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player2Gameboard = Gameboard();
player2Gameboard.init();

const player1 = Player("Alice", player1Gameboard, player2Gameboard);
const player2 = Player("Bob", player2Gameboard, player1Gameboard);

player1Gameboard.addShip("Aircraft Carrier", [
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
]);
player1Gameboard.addShip("Battleship", ["29", "39", "49", "59", "69"]);
player1Gameboard.addShip("Cruiser", ["28", "38", "48", "58"]);
player1Gameboard.addShip("Gunboat", ["27", "37", "47"]);
player1Gameboard.addShip("Submarine", ["26", "36"]);

player2Gameboard.addShip("Aircraft Carrier", [
  "21",
  "31",
  "41",
  "51",
  "61",
  "71",
]);
player2Gameboard.addShip("Battleship", ["22", "32", "42", "52", "62"]);
player2Gameboard.addShip("Cruiser", ["23", "33", "43", "53"]);
player2Gameboard.addShip("Gunboat", ["24", "34", "44"]);
player2Gameboard.addShip("Submarine", ["25", "35"]);

export { player1, player2, player1Gameboard, player2Gameboard };
