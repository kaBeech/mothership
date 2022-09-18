const nameGetter = (state) => ({
  getName: () => state.name,
});

const Ship = (name) => {
  const state = {
    name,
  };
  return {
    ...nameGetter(state),
  };
};

export default Ship;
