import Ship from "./Ship";
import Gameboard from "./Gameboard";

const battleship = Ship("Battleship", [29, 39, 49, 59, 69]);
const player1Gameboard = Gameboard();
player1Gameboard.init();

export { battleship, player1Gameboard };
