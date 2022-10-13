/* eslint-disable no-param-reassign */
import displayController from "../display/displayController";
import gameController from "./gameController";

const currentPhaseGetter = (state) => ({
  getCurrentPhase: () => state.currentPhase,
});

const currentPlayerGetter = (state) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

const currentPlayerSetter = () => ({
  setCurrentPlayer: (player) => {
    gameController.setCurrentPlayer(player);
  },
});

const opposingPlayerGetter = (state) => ({
  getOpposingPlayer: () => state.opposingPlayer,
});

const opposingPlayerSetter = () => ({
  setOpposingPlayer: (player) => {
    gameController.setOpposingPlayer(player);
  },
});

const gameStarter = (state) => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return state.promptPlayer();
    }
    return console.log("error");
  },
});

const turnEvaluator = (state) => ({
  evalTurn: function evalTurn(attackSelection) {
    const gameSquareID = `${attackSelection}p${
      gameController.getOpposingPlayer().getID()[6]
    }`;
    if (gameController.getGameInProgress()) {
      const currentPlayer = gameController.getCurrentPlayer();
      const result = gameController.evalTurn(attackSelection);
      if (result === "win") {
        return displayController.showWin();
      }
      if (result === "sunk") {
        displayController.showSunk(gameSquareID);
      } else if (result === "hit") {
        displayController.showHit(gameSquareID);
      } else if (result === "miss") {
        displayController.showMiss(gameSquareID);
      }
      gameController.setCurrentPlayer(gameController.getOpposingPlayer());
      gameController.setOpposingPlayer(currentPlayer);
      return state.promptPlayer();
    }
    return console.log("error");
  },
});

const attackSelectionReceiver = (state) => ({
  receiveAttackSelection: (gameSquareID) => {
    const targetSquareName = gameSquareID.slice(0, 2);
    const attackSelection = state.currentPlayer.attack(targetSquareName);
    return mothership.evalTurn(attackSelection);
  },
});

const mothership = (() => {
  const state = {
    currentPhase: gameController.getCurrentPhase(),
    currentPlayer: gameController.getCurrentPlayer(),
    opposingPlayer: gameController.getOpposingPlayer(),
    promptPlayer: () => {
      const currentPlayer = gameController.getCurrentPlayer();
      if (currentPlayer.getSpecies() === "computer") {
        const attackSelection = currentPlayer.attackRandomly();
        return mothership.evalTurn(attackSelection);
      }
      return displayController.showTurnNotification();
    },
  };

  return {
    ...currentPhaseGetter(state),
    ...currentPlayerGetter(state),
    ...currentPlayerSetter(state),
    ...opposingPlayerGetter(state),
    ...opposingPlayerSetter(state),
    ...gameStarter(state),
    ...turnEvaluator(state),
    ...attackSelectionReceiver(state),
  };
})();

export default mothership;
