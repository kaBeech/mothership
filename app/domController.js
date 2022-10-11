const nameGetter = (state) => ({
  getName: () => state.name,
});

const domController = (() => {
  const state = {
    name: "SUB",
  };

  return {
    ...nameGetter(state),
  };
})();

export default domController;
