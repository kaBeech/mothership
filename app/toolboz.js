const incrementedIndexGetter = () => ({
  getIncrementedIndex: (array, value) => {
    let newIndex = array.indexOf(value) + 1;
    if (newIndex >= array.length) {
      newIndex = 0;
    }
    return newIndex;
  },
});

const randomIntegerGetter = () => ({
  getRandomInteger: (minInteger, range) =>
    Math.floor(Math.random() * range) + minInteger,
});

const randomPicker = () => ({
  pickRandom: function pickRandom(...possibleResults) {
    return possibleResults[this.getRandomInteger(0, possibleResults.length)];
  },
});

const toolboz = (() => {
  const state = {
    name: "toolbox",
  };

  return {
    ...incrementedIndexGetter(state),
    ...randomIntegerGetter(state),
    ...randomPicker(state),
  };
})();

export default toolboz;
