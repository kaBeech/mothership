import Ship from "./Ship";
import Gameboard from "./Gameboard";

const player1Gameboard = Gameboard();
player1Gameboard.init();
const battleship = Ship("Battleship", ["29", "39", "49", "59", "69"]);
battleship.placeShip(player1Gameboard);

export { battleship, player1Gameboard };
