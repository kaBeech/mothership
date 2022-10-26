import Ship from "./Ship";
import Square from "./Square";
import { SquareName, Ship as ShipType, GameSquare, ShipName } from "./types";

interface GameboardState {
  squares: Array<GameSquare>;
  unblownUpShips: Array<ShipType>;
  initialized: boolean;
}

const squareGetter = (state: GameboardState) => ({
  getSquares: () => state.squares,
});

const blowUpShip = (state: GameboardState, ship: ShipType) => {
  state.unblownUpShips.splice(state.unblownUpShips.indexOf(ship), 1);
};

const attackReceiver = (state: GameboardState) => ({
  receiveAttack: (squareName: SquareName) => {
    const targetSquare = state.squares[+squareName];
    targetSquare.setGuessed(true);
    const targetShip = targetSquare.getShip();
    if (targetShip === null) {
      return "Miss";
    }
    const attackResult = targetShip.takeDamage();
    if (attackResult === "Ship blown up") {
      blowUpShip(state, targetShip);
      return attackResult;
    }
    return attackResult;
  },
});

const setInitialized = (state: GameboardState) => {
  state.initialized = true;
};

const initializer = (state: GameboardState) => ({
  init: () => {
    if (state.initialized === true) {
      return "Error - already initialized";
    }
    for (let i = 0; i < 100; i += 1) {
      let squareName = `${i}`;
      if (i < 10) {
        squareName = `0${squareName}`;
      }
      const square = Square(squareName as SquareName);
      state.squares.push(square);
    }
    setInitialized(state);
    return "Initialized";
  },
});

const shipAdder = (state: GameboardState) => ({
  addShip: function addShip(name: ShipName, segments: Array<SquareName>) {
    const occupiedSquares = [];
    segments.forEach((squareName) => {
      if (state.squares[+squareName].getShip() !== null) {
        occupiedSquares.push(squareName);
      }
    });
    if (occupiedSquares.length > 0) {
      return `Error: One or more squares already occupied: ${occupiedSquares}`;
    }
    const ship = Ship(name, this, segments);
    state.unblownUpShips.push(ship);
    ship.getSegments().forEach((squareName) => {
      state.squares[+squareName].setShip(ship);
    });
    return ship;
  },
});

const winChecker = (state: GameboardState) => ({
  checkWin: () => {
    if (state.unblownUpShips.length === 0) {
      return true;
    }
    return false;
  },
});

const Gameboard = () => {
  const state = {
    initialized: false,
    squares: [],
    unblownUpShips: [],
  };
  return {
    ...initializer(state),
    ...squareGetter(state),
    ...attackReceiver(state),
    ...shipAdder(state),
    ...winChecker(state),
  };
};

export default Gameboard;
