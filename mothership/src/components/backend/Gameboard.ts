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

const sinkShip = (state: GameboardState, ship: ShipType) => {
  state.unsunkShips.splice(state.unsunkShips.indexOf(ship), 1);
};

const attackReceiver = (state: GameboardState) => ({
  receiveAttack: (squareName: SquareName) => {
    const targetSquare = state.squares[+squareName];
    targetSquare.setGuessed(true);
    const targetShip = targetSquare.getShip();
    if (targetShip === null) {
      return "miss";
    }
    const attackResult = targetShip.takeDamage();
    if (attackResult === "Ship sunk") {
      sinkShip(state, targetShip());
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
    const ship = Ship(name, this, segments);
    state.unsunkShips.push(ship);
    ship.getSegments().forEach((segmentName) => {
      state.squares[+segmentName].setShip(ship);
    });
    return ship;
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
    ...shipAdder(state),
    ...winChecker(state),
  };
};

export default Gameboard;
