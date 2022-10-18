type Species = "human" | "computer";

interface Gameboard {
  getSquares: Function;
  receiveAttack: Function;
  init: Function;
  sinkShip: Function;
  addShip: Function;
  checkWin: Function;
}

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

export { Species, Gameboard, SquareName, Player, GamePhase };
