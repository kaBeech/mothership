type Integer = number;

type WholeNumber = number;

type SingleDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type SingleDigitString =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

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

type SquareName = `${SingleDigitString}${SingleDigitString}`;

type GameSquareID = `${SquareName}p${SingleDigitString}`;

type GamePhase = string | null;

export {
  Integer,
  WholeNumber,
  SingleDigit,
  SingleDigitString,
  Species,
  Gameboard,
  GameSquare,
  SquareName,
  GameSquareID,
  Ship,
  ShipName,
  Player,
  GamePhase,
};
