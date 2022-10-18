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

const damageTaker = (state: ShipState) => ({
  takeDamage: function takeDamage() {
    state.hp -= 1;
    if (this.isSunk()) {
      state.gameboard.sinkShip(this);
      return "sunk";
      // displaySunkMessage()
    }
    return "hit";
  },
});

const sunkChecker = (state: ShipState) => ({
  checkSunk: () => {
    if (state.hp === 0) {
      return true;
    }
    return false;
  },
});

const shipPlacer = (state: ShipState) => ({
  placeShip: function placeShip() {
    state.segments.forEach((segmentName) => {
      const segmentSquare = state.gameboard.getSquares()[+segmentName];
      segmentSquare.setShip(this);
    });
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
    ...damageTaker(state),
    ...sunkChecker(state),
    ...shipPlacer(state),
  };
};

export default Ship;
