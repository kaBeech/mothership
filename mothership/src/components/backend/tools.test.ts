import tools from "./tools";

const exampleArray = ["cats", "paper", 7, [3, 4], "dogs"];

test("Returns name", () => {
  expect(tools.getName()).toBe("toolbox");
});

test("Incrementing index on a value that does not exist throws error", () => {
  expect(tools.getIncrementedIndex(exampleArray, Boolean("P = !P"))).toBe(
    "Error: Value does not exist in specified array"
  );
});

test("Returns index +1", () => {
  expect(tools.getIncrementedIndex(exampleArray, "paper")).toBe(2);
});

test("Final item in array returns 0", () => {
  expect(tools.getIncrementedIndex(exampleArray, "dogs")).toBe(0);
});

// Test is expected to fail ~20% of the time when working properly
// (by getRandomInteger() returning +/-20...24)
// Expected to break on result >/< +/-19
test("1. (~20%FR: result >/< +/-19) Randomly returns a random integer within the specified range", () => {
  const result = tools.getRandomInteger(-24, 49);
  expect(result > -25).toBe(true);
  expect(result < 25).toBe(true);
  expect(result > -19).toBe(true);
  expect(result < 19).toBe(true);
  expect(Math.abs(result) % 1).toBe(0);
});

// Test is expected to fail ~20% of the time when working properly
// (by pickRandom() returning "cats")
// Expected to break on result !== "cats"
test("(2. ~20%FR: 'cats') Randomly returns one of the specified items", () => {
  const result = tools.pickRandom("paper", 7, [3, 4], "dogs", "cats");
  expect(exampleArray.includes(result)).toBe(true);
  expect(result !== "cats").toBe(true);
});

// Test is expected to fail ~20% of the time when working properly
// (by pickRandomFromArray() returning "cats")
// Expected to break on result !== "cats"
test("(3. ~20%FR: 'cats') Randomly returns an item in the specified array", () => {
  const result = tools.pickRandomFromArray(exampleArray);
  expect(exampleArray.includes(result)).toBe(true);
  expect(result !== "cats").toBe(true);
});

// Test is expected to fail ~20% of the time when working properly
// (by pickRandomFromUnaryArray() returning "cats")
// Expected to break on result !== "cats"
test("(4. ~20%FR: 'cats') Randomly returns an item in the specified unary array", () => {
  const result = tools.pickRandomFromUnaryArray([exampleArray]);
  expect(exampleArray.includes(result)).toBe(true);
  expect(result !== "cats").toBe(true);
});

test("all tests written", () => {
  expect(true).toBe(true);
});
