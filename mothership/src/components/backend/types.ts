type Species = "human" | "computer";

interface Gameboard {
  getSquares: Function;
  receiveAttack: Function;
  init: Function;
  sinkShip: Function;
  addShip: Function;
  checkWin: Function;
}

interface GameSquare {
  getName: Function;
  getShip: Function;
  setShip: Function;
  checkGuessed: Function;
  setGuessed: Function;
}

interface Ship {
  getName: Function;
  getHP: Function;
  takeDamage: Function;
  placeShip: Function;
  checkSunk: Function;
}

type ShipName =
  | "Mothership"
  | "Battleship"
  | "Cruiser"
  | "Gunship"
  | "Starfighter";

interface Player {
  getName: Function;
  getID: Function;
  getSpecies: Function;
  getOpposingGameboard: Function;
  attack: Function;
  attackRandomly: Function;
  removePossibleMove: Function;
}

type SquareName = `${number}${number}`;

type GamePhase = string | null;

export {
  Species,
  Gameboard,
  GameSquare,
  SquareName,
  Ship,
  ShipName,
  Player,
  GamePhase,
};
