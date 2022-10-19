import mothership from "./mothership";

test.skip("game starts with computer move", () => {
  expect(mothership.startGame()).toBe("miss");
});

test("all tests written", () => {
  expect(true).toBe(
    "don't change this until tests have been added for all public methods"
  );
});
