const nameGetter = (state) => ({
  getName: () => state.name,
});

const statusMessageGetter = (state) => ({
  getName: () => state.name,
});

const domController = (() => {
  const state = {
    name: "SUB",
    statusMessage: "Click Start Game To Begin!",
  };

  return {
    ...nameGetter(state),
    ...statusMessageGetter(state),
  };
})();

export default domController;
