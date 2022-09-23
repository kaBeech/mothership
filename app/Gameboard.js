import Ship from "./Ship";
import Square from "./Square";

const squareGetter = (state) => ({
  getSquares: () => state.squares,
});

const attackReceiver = (state) => ({
  receiveAttack: (squareName) => {
    const targetSquare = state.squares[+squareName];
    targetSquare.setGuessed(true);
    if (targetSquare.getShip() === null) {
      return "continue";
    }
    return targetSquare.getShip().takeDamage();
  },
});

const initializer = (state) => ({
  init: () => {
    for (let i = 0; i < 100; i += 1) {
      let squareName = `${i}`;
      if (i < 10) {
        squareName = `0${squareName}`;
      }
      const square = Square(squareName);
      state.squares.push(square);
    }
  },
});

const shipAdder = (state) => ({
  addShip: function addShip(name, segments) {
    const ship = Ship(name, this, segments);
    state.unsunkShips.push(ship);
    ship.placeShip();
  },
});

const shipSinker = (state) => ({
  sinkShip: (ship) => {
    state.unsunkShips.splice(state.unsunkShips.indexOf(ship), 1);
    if (state.unsunkShips.length === 0) {
      return "You win!";
    }
    return "continue";
  },
});

const Gameboard = () => {
  const state = {
    squares: [],
    unsunkShips: [],
  };
  return {
    ...squareGetter(state),
    ...attackReceiver(state),
    ...initializer(state),
    ...shipSinker(state),
    ...shipAdder(state),
  };
};

export default Gameboard;
