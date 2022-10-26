import { Integer } from "./types";

interface ToolsState {
  name: string;
}

const nameGetter = (state: ToolsState) => ({
  getName: () => state.name,
});

const incrementedIndexGetter = () => ({
  getIncrementedIndex: (array: Array<any>, value: any) => {
    let newIndex = array.indexOf(value) + 1;
    if (newIndex >= array.length) {
      newIndex = 0;
    }
    return newIndex;
  },
});

const randomIntegerGetter = () => ({
  getRandomInteger: (minInteger: Integer, range: Integer) =>
    Math.floor(Math.random() * range) + minInteger,
});

const randomPicker = () => ({
  pickRandom: function pickRandom(...possibleResults: any) {
    return possibleResults[this.getRandomInteger(0, possibleResults.length)];
  },
});

// Rethink this
const randomPickerFromArray = () => ({
  pickRandomFromArray: function pickRandom(possibleResultsArray: Array<any>) {
    return possibleResultsArray[
      this.getRandomInteger(0, possibleResultsArray.length)
    ];
  },
});

const randomPickerFromUnaryArray = () => ({
  pickRandomFromUnaryArray: function pickRandom(
    possibleResultsUnaryArray: Array<any>
  ) {
    const possibleResults = possibleResultsUnaryArray[0];
    return this.pickRandomFromArray(possibleResults);
  },
});

const tools = (() => {
  const state = {
    name: "toolbox",
  };

  return {
    ...nameGetter(state),
    ...incrementedIndexGetter(),
    ...randomIntegerGetter(),
    ...randomPicker(),
    ...randomPickerFromArray(),
    ...randomPickerFromUnaryArray(),
  };
})();

export default tools;
