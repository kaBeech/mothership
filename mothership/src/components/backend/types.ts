type Species = "human" | "computer";

interface Gameboard {
  getSquares: Function;
  receiveAttack: Function;
  init: Function;
  sinkShip: Function;
  addShip: Function;
  checkWin: Function;
}

export { Species, Gameboard };
