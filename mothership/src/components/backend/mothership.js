/* eslint-disable no-param-reassign */
import displayController from "../display/displayController";
import gameController from "./gameController";

const promptPlayer = (mothership) => {
  const currentPlayer = gameController.getCurrentPlayer();
  if (currentPlayer.getSpecies() === "computer") {
    const attackSelection = currentPlayer.attackRandomly();
    return mothership.evalTurn(attackSelection);
  }
  return console.log(`${currentPlayer}'s Turn!`);
};

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

const gameStarter = () => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return promptPlayer(this);
    }
    return console.log("error");
  },
});

const turnEvaluator = () => ({
  evalTurn: function evalTurn(attackSelection, gameSquareID) {
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
      return promptPlayer(this);
    }
    return console.log("error");
  },
});

const attackSelectionReceiver = (state) => ({
  receiveAttackSelection: (gameSquareID) => {
    const targetSquareName = gameSquareID.slice(2, 4);
    const attackSelection = state.currentPlayer.attack(targetSquareName);
    return mothership.evalTurn(attackSelection, gameSquareID);
  },
});

const mothership = (() => {
  const state = {
    currentPhase: gameController.getCurrentPhase(),
    currentPlayer: gameController.getCurrentPlayer(),
    opposingPlayer: gameController.getOpposingPlayer(),
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
