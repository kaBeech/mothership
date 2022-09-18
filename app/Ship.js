/* eslint-disable no-param-reassign */
const nameGetter = (state) => ({
  getName: () => state.name,
});

const hpGetter = (state) => ({
  getHP: () => state.hp,
});

const hitTaker = (state) => ({
  hit: () => {
    state.hp -= 1;
  },
});

const Ship = (name, length, segments) => {
  const state = {
    name,
    length,
    hp: length,
    segments,
  };
  return {
    ...nameGetter(state),
    ...hpGetter(state),
    ...hitTaker(state),
  };
};

export default Ship;
