import mothership from "./mothership";

test.skip("Game starts with computer move", () => {
  expect(mothership.startGame()).toBe("Prompted human player");
});

test("Initial phase returns null", () => {
  expect(mothership.getCurrentPhase()).toBe(null);
});

test("Initial currentPlayer returns player1", () => {
  expect(mothership.getCurrentPlayer().getID()).toBe("player1");
});

test("Initial opposingPlayer returns player0", () => {
  expect(mothership.getOpposingPlayer().getID()).toBe("player0");
});

test("Selecting an attack before starting the game throws error", () => {
  expect(mothership.receiveAttackSelection("24p1")).toBe(
    "Error: Wait until it's a human player's turn! The current phase is null"
  );
});

test("Attempting to start the game while game is already in progress throws error", () => {
  mothership.startGame();
  expect(mothership.startGame()).toBe("Error: Game already in progress!");
});

test("Phase is 'Waiting for human player' after starting the game", () => {
  mothership.startGame();
  expect(mothership.getCurrentPhase()).toBe("Waiting for human player");
});

test("Current player is player0 after starting the game", () => {
  mothership.startGame();
  expect(mothership.getCurrentPlayer().getID()).toBe("player0");
});

test("Opposing player is player1 after starting the game", () => {
  mothership.startGame();
  expect(mothership.getOpposingPlayer().getID()).toBe("player1");
});

test("Selecting an attack on currentPlayer's own board throws error", () => {
  mothership.startGame();
  expect(mothership.receiveAttackSelection("24p0")).toBe(
    "Error: Select an attack on your opponant's gameboard, not your own!"
  );
});

test("Selecting a valid attack progresses loop back to next human player turn", () => {
  mothership.startGame();
  expect(mothership.receiveAttackSelection("24p1")).toBe(
    "Prompted human player"
  );
});

test("all tests written", () => {
  expect(true).toBe(true);
});
