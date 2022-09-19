import Square from "./Square";

const squareGetter = (state) => ({
  getSquares: () => state.squares,
});

const attackReceiver = (state) => ({
  receiveAttack: (squareName) => {
    const targetSquare = state.squares[+squareName];
    targetSquare.setGuessed(true);
    if (targetSquare.getShip() === null) {
      return "You missed!";
    }
    targetSquare.getShip().takeDamage();
    return "You hit!";
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
  addShip: (ship) => {
    state.unsunkShips.push(ship);
  },
});

const shipSinker = (state) => ({
  sinkShip: (ship) => {
    state.unsunkShips.splice(state.unsunkShips.indexOf(ship), 1);
    if (state.unsunkShips.length === 0) {
      return "You win!";
    }
    return "Keep playing!";
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
    ...shipAdder(state),
    ...shipSinker(state),
  };
};

export default Gameboard;
