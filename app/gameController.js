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

const currentPlayerGetter = (state) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

const opposingPlayerSetter = (state) => ({
  setOpposingPlayer: (player) => {
    state.opposingPlayer = player;
  },
});

const opposingPlayerGetter = (state) => ({
  getOpposingPlayer: () => state.opposingPlayer,
});

const gameInProgressGetter = (state) => ({
  getGameInProgress: () => state.gameInProgress,
});

const gameInProgressSetter = (state) => ({
  setGameInProgress: (boolean) => {
    state.gameInProgress = boolean;
  },
});

const turnEvaluator = (state) => ({
  evalTurn: function evalTurn(targetSquare) {
    const { currentPlayer } = state;
    const result = currentPlayer
      .getOpposingGameboard()
      .receiveAttack(targetSquare);
    if (result === "miss") {
      return "miss";
    }
    if (currentPlayer.getOpposingGameboard().checkWin()) {
      this.setGameInProgress(false);
      return "win";
    }
    if (result === "sunk") {
      return "sunk";
    }
    if (result === "hit") {
      return "hit";
    }
    return console.log("error");
  },
});

const gameController = (() => {
  const state = {
    gameInProgress: false,
    currentPlayer: player1,
    opposingPlayer: player2,
  };

  return {
    ...currentPlayerSetter(state),
    ...currentPlayerGetter(state),
    ...opposingPlayerSetter(state),
    ...opposingPlayerGetter(state),
    ...gameInProgressGetter(state),
    ...gameInProgressSetter(state),
    ...turnEvaluator(state),
  };
})();

export default gameController;
