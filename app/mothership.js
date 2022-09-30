/* eslint-disable no-param-reassign */
import Gameboard from "./Gameboard";
import Player from "./Player";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player2Gameboard = Gameboard();
player2Gameboard.init();

const player1 = Player("Alice", player1Gameboard, player2Gameboard, "computer");
const player2 = Player("Bob", player2Gameboard, player1Gameboard, "human");

player1Gameboard.addShip("Mothership", ["20", "30", "40", "50", "60", "70"]);
player1Gameboard.addShip("Battleship", ["29", "39", "49", "59", "69"]);
player1Gameboard.addShip("Cruiser", ["28", "38", "48", "58"]);
player1Gameboard.addShip("Gunship", ["27", "37", "47"]);
player1Gameboard.addShip("Starfighter", ["26", "36"]);

player2Gameboard.addShip("Mothership", ["21", "31", "41", "51", "61", "71"]);
player2Gameboard.addShip("Battleship", ["22", "32", "42", "52", "62"]);
player2Gameboard.addShip("Cruiser", ["23", "33", "43", "53"]);
player2Gameboard.addShip("Gunship", ["24", "34", "44"]);
player2Gameboard.addShip("Starfighter", ["25", "35"]);

const currentPlayerSetter = (state) => ({
  setCurrentPlayer: (player) => {
    state.currentPlayer = player;
  },
});

const opposingPlayerSetter = (state) => ({
  setOpposingPlayer: (player) => {
    state.opposingPlayer = player;
  },
});

const gameInProgressGetter = (state) => ({
  getGameInProgress: () => state.gameInProgress,
});

const gameInProgressSetter = (state) => ({
  setGameInProgress: (boolean) => {
    state.gameInProgress = boolean;
  },
});

const gameStarter = (state) => ({
  startGame: function startGame() {
    if (!state.gameInProgress) {
      this.setGameInProgress(true);
      return true;
      // return this.promptPlayer(player1);
    }
    return false;
  },
});

const gameController = (state) => ({
  controlGame: function controlGame() {
    if (!this.startGame()) {
      return console.log("error");
    }
    while (this.getGameInProgress()) {
      const targetSquare = this.promptPlayer(state.currentPlayer);
      const { currentPlayer } = state;
      if (!state.opposingPlayer.gameboard.receiveAttack(targetSquare)) {
        console.log("You missed!");
      } else {
        targetSquare.getShip().takeDamage();
        if (state.opposingPlayer.gameboard.checkWin()) {
          this.setGameInProgress(false);
        } else {
          this.setCurrentPlayer(state.opposingPlayer);
          this.setOpposingPlayer(currentPlayer);
        }
      }
    }
    return console.log("Game Won!!!");
  },
});

const playerPrompter = (state) => ({
  promptPlayer: function promptPlayer(targetPlayer) {
    if (targetPlayer.getSpecies() === "computer") {
      return targetPlayer.attackRandomly();
    }
    // Wait for human move - next line is scratch content
    return console.log(state.gameInProgress);
  },
});

const mothership = (() => {
  const state = {
    gameInProgress: false,
    currentPlayer: null,
    opposingPlayer: null,
  };

  return {
    ...currentPlayerSetter(state),
    ...opposingPlayerSetter(state),
    ...gameInProgressGetter(state),
    ...gameInProgressSetter(state),
    ...gameStarter(state),
    ...gameController(state),
    ...playerPrompter(state),
  };
})();

export { mothership, player1, player2, player1Gameboard, player2Gameboard };

// pseudocode

// loop:
// -apply computer move
// -evaluate computer move
// -check if game is won
// -wait for human move
// -apply human move
// -evaluate human move
// -check if game is won
