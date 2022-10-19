import Gameboard from "./Gameboard";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player0Gameboard = Gameboard();
player0Gameboard.init();

player1Gameboard.addShip("Mothership", ["20", "30", "40", "50", "60", "70"]);
player1Gameboard.addShip("Battleship", ["29", "39", "49", "59", "69"]);
player1Gameboard.addShip("Cruiser", ["28", "38", "48", "58"]);
player1Gameboard.addShip("Gunship", ["27", "37", "47"]);
player1Gameboard.addShip("Starfighter", ["26", "36"]);

player0Gameboard.addShip("Mothership", ["21", "31", "41", "51", "61", "71"]);
player0Gameboard.addShip("Battleship", ["22", "32", "42", "52", "62"]);
player0Gameboard.addShip("Cruiser", ["23", "33", "43", "53"]);
player0Gameboard.addShip("Gunship", ["24", "34", "44"]);
player0Gameboard.addShip("Starfighter", ["25", "35"]);

const dummyGameboard = Gameboard();

test("initializing returns correct string", () => {
  expect(dummyGameboard.init()).toBe("Initialized");
});

test("initializing twice throws error", () => {
  expect(player1Gameboard.init()).toBe("Error - already initialized");
});

test("adding ship returns a ship", () => {
  dummyGameboard.init();
  const resultingShip = dummyGameboard.addShip("Mothership", [
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
  ]);
  expect(resultingShip.getName()).toBe("Mothership");
});

test("adding ship over an occupied square throws error", () => {
  expect(
    player1Gameboard.addShip("Battleship", ["20", "21", "22", "23", "24"])
  ).toBe("Error - one or more squares already occupied");
});

test("getSquares gets 100 squares", () => {
  expect(player0Gameboard.getSquares().length).toBe(100);
});

test("gameboard recognizes miss", () => {
  expect(player1Gameboard.receiveAttack("28")).toBe("hit");
});

test("gameboard recognizes hit", () => {
  expect(player1Gameboard.receiveAttack("32")).toBe("miss");
});

// test.skip("sinking all ships wins game", () => {
//   player1Gameboard.receiveAttack(26);
//   player1Gameboard.sinkShip(player1AircraftCarrier);
//   player1Gameboard.sinkShip(player1Cruiser);
//   player1Gameboard.sinkShip(player1Frigate);
//   expect(player1Gameboard.sinkShip(player1Frigate)).toBe("You win!");
// });

test("all tests written", () => {
  expect(true).toBe(
    "don't change this until tests have been added for .sinkShip and .checkWin"
  );
});
