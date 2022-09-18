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
      // displaySunkMessage()
    }
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
  placeShip: function placeShip(targetGameboard) {
    state.segments.forEach((segmentName) => {
      targetGameboard.getSquares()[+segmentName].setShip(this);
    });
  },
});

const Ship = (name, segments) => {
  const state = {
    name,
    segments,
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
