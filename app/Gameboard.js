import Square from "./Square";

const attackReceiver = (state) => ({
  receiveAttack: (squareName) => {
    if (state.squares[+squareName].getShip() === "null") {
      return "You missed!";
    }
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

const Gameboard = () => {
  const state = {
    squares: [],
  };
  return {
    ...attackReceiver(state),
    ...initializer(state),
  };
};

export default Gameboard;
