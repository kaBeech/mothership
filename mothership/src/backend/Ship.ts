/* eslint-disable no-param-reassign */

import { Gameboard, SquareName } from "./types";

interface ShipState {
  name: string;
  gameboard: Gameboard;
  segments: Array<SquareName>;
  length: number;
  hp: number;
}

const nameGetter = (state: ShipState) => ({
  getName: () => state.name,
});

const hpGetter = (state: ShipState) => ({
  getHP: () => state.hp,
});

const segmentsGetter = (state: ShipState) => ({
  getSegments: () => state.segments,
});

const damageTaker = (state: ShipState) => ({
  takeDamage: function takeDamage() {
    if (state.hp > 0) {
      state.hp -= 1;
      if (this.checkIfBlownUp()) {
        return "Ship blown up";
      }
      return "Hit";
    }
    return "Error: This ship is already blown up!";
  },
});

const blownUpChecker = (state: ShipState) => ({
  checkIfBlownUp: () => {
    if (state.hp === 0) {
      return true;
    }
    return false;
  },
});

const Ship = (
  name: string,
  gameboard: Gameboard,
  segments: Array<SquareName>
) => {
  const state = {
    name,
    gameboard,
    segments,
    length: segments.length,
    hp: segments.length,
  };
  return {
    ...nameGetter(state),
    ...hpGetter(state),
    ...segmentsGetter(state),
    ...damageTaker(state),
    ...blownUpChecker(state),
  };
};

export default Ship;
