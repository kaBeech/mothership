/* eslint-disable no-param-reassign */
import Gameboard from "./Gameboard";
import Player from "./Player";

const player1Gameboard = Gameboard();
player1Gameboard.init();

const player0Gameboard = Gameboard();
player0Gameboard.init();

const player1 = Player(
  "Alice",
  "player1",
  player1Gameboard,
  player0Gameboard,
  "computer"
);
const player0 = Player(
  "Bob",
  "player0",
  player0Gameboard,
  player1Gameboard,
  "human"
);

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

const gameInProgressGetter = (state) => ({
  getGameInProgress: () => state.gameInProgress,
});

const gameInProgressSetter = (state) => ({
  setGameInProgress: (boolean: boolean) => {
    state.gameInProgress = boolean;
  },
});

const currentPhaseGetter = (state) => ({
  getCurrentPhase: () => state.currentPhase,
});

const currentPhaseSetter = (state) => ({
  setCurrentPhase: (newPhase) => {
    state.currentPhase = newPhase;
  },
});

const currentPlayerGetter = (state) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

const currentPlayerSetter = (state) => ({
  setCurrentPlayer: (player) => {
    state.currentPlayer = player;
  },
});

const opposingPlayerGetter = (state) => ({
  getOpposingPlayer: () => state.opposingPlayer,
});

const opposingPlayerSetter = (state) => ({
  setOpposingPlayer: (player) => {
    state.opposingPlayer = player;
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
    currentPhase: null,
    currentPlayer: player1,
    opposingPlayer: player0,
  };

  return {
    ...gameInProgressGetter(state),
    ...gameInProgressSetter(state),
    ...currentPhaseGetter(state),
    ...currentPhaseSetter(state),
    ...currentPlayerGetter(state),
    ...currentPlayerSetter(state),
    ...opposingPlayerGetter(state),
    ...opposingPlayerSetter(state),
    ...turnEvaluator(state),
  };
})();

export default gameController;
