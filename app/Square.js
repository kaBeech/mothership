/* eslint-disable no-param-reassign */
const nameGetter = (state) => ({
  getName: () => state.name,
});

const shipGetter = (state) => ({
  getShip: () => state.ship,
});

const shipSetter = (state) => ({
  setShip: (shipName) => {
    state.ship = shipName;
  },
});

const guessedChecker = (state) => ({
  isGuessed: () => state.guessed,
});

const guessedSetter = (state) => ({
  setGuessed: (booleanValue) => {
    state.guessed = booleanValue;
  },
});

const Square = (name) => {
  const state = {
    name,
    ship: null,
    guessed: false,
  };
  return {
    ...nameGetter(state),
    ...shipGetter(state),
    ...shipSetter(state),
    ...guessedChecker(state),
    ...guessedSetter(state),
  };
};

export default Square;
