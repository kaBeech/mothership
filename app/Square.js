/* eslint-disable no-param-reassign */
const nameGetter = (state) => ({
  getName: () => state.name,
});

const shipGetter = (state) => ({
  getShip: () => state.ship,
});

const guessedChecker = (state) => ({
  isGuessed: () => state.guessed,
});

const Square = (name) => {
  const state = {
    name,
    ship: "none",
    guessed: false,
  };
  return {
    ...nameGetter(state),
    ...shipGetter(state),
    ...guessedChecker(state),
  };
};

export default Square;
