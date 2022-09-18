const nameGetter = (state) => ({
  getName: () => state.name,
});

const hpGetter = (state) => ({
  getHP: () => state.hp,
});

const Ship = (name, hp) => {
  const state = {
    name,
    hp,
  };
  return {
    ...nameGetter(state),
    ...hpGetter(state),
  };
};

export default Ship;
