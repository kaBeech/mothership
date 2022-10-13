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

// Rethink this
const randomPickerFromArray = () => ({
  pickRandomFromArray: function pickRandom(possibleResultsArray) {
    return possibleResultsArray[
      this.getRandomInteger(0, possibleResultsArray.length)
    ];
  },
});

const randomPickerFromUnaryArray = () => ({
  pickRandomFromUnaryArray: function pickRandom(possibleResultsUnaryArray) {
    const possibleResults = possibleResultsUnaryArray[0];
    return this.pickRandomFromArray(possibleResults);
  },
});

const tools = (() => {
  const state = {
    name: "toolbox",
  };

  return {
    ...incrementedIndexGetter(state),
    ...randomIntegerGetter(state),
    ...randomPicker(state),
    ...randomPickerFromArray(state),
    ...randomPickerFromUnaryArray(state),
  };
})();

export default tools;
