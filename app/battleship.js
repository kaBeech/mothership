import Gameboard from "./Gameboard";

const player1Gameboard = Gameboard();
player1Gameboard.init();
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

export {
  // eslint-disable-next-line import/prefer-default-export
  player1Gameboard,
};
