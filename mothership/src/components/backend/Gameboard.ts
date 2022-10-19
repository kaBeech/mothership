import Ship from "./Ship";
import Square from "./Square";
import { SquareName, Ship as ShipType, GameSquare, ShipName } from "./types";

interface GameboardState {
  squares: Array<GameSquare>;
  unsunkShips: Array<ShipType>;
  initialized: boolean;
}

const squareGetter = (state: GameboardState) => ({
  getSquares: () => state.squares,
});

const attackReceiver = (state: GameboardState) => ({
  receiveAttack: (squareName: SquareName) => {
    const targetSquare = state.squares[+squareName];
    targetSquare.setGuessed(true);
    if (targetSquare.getShip() === null) {
      return "miss";
    }
    return targetSquare.getShip().takeDamage();
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
    if (state.initialized === false) {
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
    }
  },
});

const shipAdder = (state: GameboardState) => ({
  addShip: function addShip(name: ShipName, segments: Array<SquareName>) {
    const ship = Ship(name, this, segments);
    state.unsunkShips.push(ship);
    ship.placeShip();
  },
});

const shipSinker = (state: GameboardState) => ({
  sinkShip: (ship: ShipType) => {
    state.unsunkShips.splice(state.unsunkShips.indexOf(ship), 1);
  },
});

const winChecker = (state: GameboardState) => ({
  checkWin: () => {
    if (state.unsunkShips.length === 0) {
      return true;
    }
    return false;
  },
});

const Gameboard = () => {
  const state = {
    initialized: false,
    squares: [],
    unsunkShips: [],
  };
  return {
    ...initializer(state),
    ...squareGetter(state),
    ...attackReceiver(state),
    ...shipSinker(state),
    ...shipAdder(state),
    ...winChecker(state),
  };
};

export default Gameboard;
