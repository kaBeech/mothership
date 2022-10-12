/* eslint-disable no-param-reassign */
const nameGetter = (state) => ({
  getName: () => state.name,
});

const hpGetter = (state) => ({
  getHP: () => state.hp,
});

const damageTaker = (state) => ({
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

const sunkChecker = (state) => ({
  isSunk: () => {
    if (state.hp === 0) {
      return true;
    }
    return false;
  },
});

const shipPlacer = (state) => ({
  placeShip: function placeShip() {
    state.segments.forEach((segmentName) => {
      const segmentSquare = state.gameboard.getSquares()[+segmentName];
      segmentSquare.setShip(this);
    });
  },
});

const Ship = (name, gameboard, segments) => {
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
