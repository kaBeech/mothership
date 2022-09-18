// import Square from "./Square";

const attackReceiver = () => ({
  // receiveAttack: () => ???
});

const Gameboard = (squares) => {
  const state = {
    squares,
    guessed: false,
  };
  return {
    ...attackReceiver(state),
  };
};

export default Gameboard;
