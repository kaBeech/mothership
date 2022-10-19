/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import mothership from "./mothership";

// test.skip("shows name", () => {
//   expect(player1Battleship.getName()).toBe("Battleship");
// });

// test.skip("shows HP", () => {
//   expect(player1Battleship.getHP()).toBe(5);
// });

// test.skip("shows damage from getting hit", () => {
//   player1Battleship.takeDamage();
//   expect(player1Battleship.getHP()).toBe(4);
// });

// test.skip("gets sunk", () => {
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   player1Battleship.takeDamage();
//   expect(player1Battleship.isSunk()).toBe(true);
// });

// test.skip("occupied square recognizes its ship", () => {
//   expect(player1Gameboard.getSquares()[69].getShip()).toBe(player1Battleship);
// });

// test.skip("gameboard processes missed attack", () => {
//   expect(player1Gameboard.receiveAttack(22)).toBe("You missed!");
// });

// test.skip("gameboard processes hit attack", () => {
//   expect(player1Gameboard.receiveAttack(26)).toBe("You hit!");
// });

// test.skip("sinking all ships wins game", () => {
//   player1Gameboard.receiveAttack(26);
//   player1Gameboard.sinkShip(player1AircraftCarrier);
//   player1Gameboard.sinkShip(player1Cruiser);
//   player1Gameboard.sinkShip(player1Frigate);
//   expect(player1Gameboard.sinkShip(player1Frigate)).toBe("You win!");
// });

// test.skip("player can make moves", () => {
//   expect(player0.attack("28")).toBe("You hit!");
// });

// test.skip("player can attack randomly", () => {
//   expect(player0.attackRandomly()).toBe("You missed!");
// });

test.skip("game starts with computer move", () => {
  expect(mothership.startGame()).toBe("miss");
});

test("all tests written", () => {
  expect(true).toBe(
    "don't change this until tests have been added for all public methods"
  );
});
