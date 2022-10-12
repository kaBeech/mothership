/* eslint-disable no-param-reassign */
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
  evalTurn: function evalTurn(attackSelection) {
    if (gameController.getGameInProgress()) {
      const currentPlayer = gameController.getCurrentPlayer();
      const result = gameController.evalTurn(attackSelection);
      if (result === "win") {
        return console.log(`${currentPlayer.getName()} Won!!!`);
      }
      if (result === "sunk") {
        console.log(`${currentPlayer.getName()} sunk a ship!`);
      } else if (result === "hit") {
        console.log(`${currentPlayer.getName()} hit!`);
      } else if (result === "miss") {
        console.log(`${currentPlayer.getName()} missed!`);
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
    return mothership.evalTurn(attackSelection);
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
