/* eslint-disable no-param-reassign */
const nameGetter = (state) => ({
  getName: () => state.name,
});

const guessedChecker = (state) => ({
  isGuessed: () => state.guessed,
});

const Square = (name) => {
  const state = {
    name,
    guessed: false,
  };
  return {
    ...nameGetter(state),
    ...guessedChecker(state),
  };
};

export default Square;
