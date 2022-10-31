import mothership from "./mothership";

// test("Initial phase returns null", () => {
//   expect(mothership.getCurrentPhase()).toBe(null);
// });

// test("Initial currentPlayer returns player1", () => {
//   expect(mothership.getCurrentPlayer().getID()).toBe("player1");
// });

// test("Initial opposingPlayer returns player0", () => {
//   expect(mothership.getOpposingPlayer().getID()).toBe("player0");
// });

test("Selecting an attack before starting the game throws error", () => {
  const result = mothership.receiveAttackSelection("24p1");
  expect(result.responseType).toBe("error");
  expect(result.message).toBe(
    "Error: Wait until it's a human player's turn! The current phase is null"
  );
});

test("Game starts", () => {
  const result = mothership.startGame();
  expect(result.responseType).toBe("promptHumanAttackSelection");
  expect(result.message).toBe("Bob, it is your turn!");
  expect(result.squareUpdates.length).toBe(41);
  expect(result.squareUpdates[0]).toStrictEqual({
    gameSquareID: "20p1",
    guessed: false,
    ship: "Mothership",
    blownUp: false,
  });
});

test("Attempting to start the game while game is already in progress throws error", () => {
  const result = mothership.startGame();
  expect(result.responseType).toBe("error");
  expect(result.message).toBe("Error: Game already in progress!");
});

// test("Phase is 'Waiting for human player' after starting the game", () => {
//   expect(mothership.getCurrentPhase()).toBe("Waiting for human player");
// });

// test("Current player is player0 after starting the game", () => {
//   expect(mothership.getCurrentPlayer().getID()).toBe("player0");
// });

// test("Opposing player is player1 after starting the game", () => {
//   expect(mothership.getOpposingPlayer().getID()).toBe("player1");
// });

test("Selecting an attack on currentPlayer's own board throws error", () => {
  const result = mothership.receiveAttackSelection("24p0");
  expect(result.responseType).toBe("error");
  expect(result.message).toBe(
    "Error: Select an attack on your opponant's gameboard, not your own!"
  );
});

test("Selecting a valid attack progresses loop back to next human player turn", () => {
  const result = mothership.receiveAttackSelection("24p1");
  expect(result.responseType).toBe("promptHumanAttackSelection");
  expect(result.message).toBe("Bob, it is your turn!");
  expect(result.squareUpdates[0]).toStrictEqual({
    gameSquareID: "24p1",
    guessed: true,
    ship: null,
    blownUp: false,
  });
});

test("Selecting a valid attack that hits returns properly", () => {
  const result = mothership.receiveAttackSelection("28p1");
  expect(result.responseType).toBe("promptHumanAttackSelection");
  expect(result.message).toBe("Bob, it is your turn!");
  expect(result.squareUpdates[0]).toStrictEqual({
    gameSquareID: "28p1",
    guessed: true,
    ship: "Cruiser",
    blownUp: false,
  });
});

test("all tests written", () => {
  expect(true).toBe(
    "To be changed when tests for all results of all public methods are written"
  );
});
