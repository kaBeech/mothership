/* eslint-disable no-param-reassign */

import { Ship, SquareName } from "./types";

interface SquareState {
  name: SquareName;
  ship: Ship | null;
  guessed: boolean;
}

const nameGetter = (state: SquareState) => ({
  getName: () => state.name,
});

const shipGetter = (state: SquareState) => ({
  getShip: () => state.ship,
});

const shipSetter = (state: SquareState) => ({
  setShip: (ship: Ship) => {
    state.ship = ship;
  },
});

const guessedChecker = (state: SquareState) => ({
  checkGuessed: () => state.guessed,
});

const guessedSetter = (state: SquareState) => ({
  setGuessed: (booleanValue: boolean) => {
    state.guessed = booleanValue;
  },
});

const Square = (name: SquareName) => {
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
