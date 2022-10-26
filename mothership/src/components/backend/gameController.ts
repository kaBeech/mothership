/* eslint-disable no-param-reassign */
import Gameboard from "./Gameboard";
import Player from "./Player";
import type { Player as PlayerType, SquareName, GamePhase } from "./types";

interface gameControllerState {
  gameInProgress: boolean;
  currentPhase: GamePhase;
  currentPlayer: PlayerType;
  opposingPlayer: PlayerType;
}

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

const gameInProgressGetter = (state: gameControllerState) => ({
  getGameInProgress: () => state.gameInProgress,
});

const gameInProgressSetter = (state: gameControllerState) => ({
  setGameInProgress: (boolean: boolean) => {
    state.gameInProgress = boolean;
  },
});

const currentPhaseGetter = (state: gameControllerState) => ({
  getCurrentPhase: () => state.currentPhase,
});

const currentPhaseSetter = (state: gameControllerState) => ({
  setCurrentPhase: (newPhase: GamePhase) => {
    state.currentPhase = newPhase;
  },
});

const currentPlayerGetter = (state: gameControllerState) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

const currentPlayerSetter = (state: gameControllerState) => ({
  setCurrentPlayer: (player: PlayerType) => {
    state.currentPlayer = player;
  },
});

const opposingPlayerGetter = (state: gameControllerState) => ({
  getOpposingPlayer: () => state.opposingPlayer,
});

const opposingPlayerSetter = (state: gameControllerState) => ({
  setOpposingPlayer: (player: PlayerType) => {
    state.opposingPlayer = player;
  },
});

const turnEvaluator = (state: gameControllerState) => ({
  evalTurn: function evalTurn(targetSquare: SquareName) {
    const { currentPlayer } = state;
    const result = currentPlayer
      .getOpposingGameboard()
      .receiveAttack(targetSquare);
    if (result === "Miss") {
      return "Miss";
    }
    if (currentPlayer.getOpposingGameboard().checkWin()) {
      this.setGameInProgress(false);
      return "Win";
    }
    if (result === "Ship blown up") {
      return "Ship blown up";
    }
    if (result === "Hit") {
      return "Hit";
    }
    return `Error: Invalid attack - attempted targestSquare was ${targetSquare}, restult was ${result}`;
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
