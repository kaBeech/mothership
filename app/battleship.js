import Ship from "./Ship";
import Gameboard from "./Gameboard";

const player1Gameboard = Gameboard();
player1Gameboard.init();
const player1Battleship = Ship("Battleship", ["29", "39", "49", "59", "69"]);
player1Battleship.placeShip(player1Gameboard);

export { player1Battleship, player1Gameboard };
