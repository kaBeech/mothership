/* eslint-disable no-param-reassign */
import gameController from "./gameController";

const promptPlayer = (mothership) => {
  const currentPlayer = gameController.getCurrentPlayer();
  if (currentPlayer.getSpecies() === "computer") {
    const targetSquare = currentPlayer.attackRandomly();
    return mothership.evalTurn(targetSquare);
  }
  return console.log(`${currentPlayer}'s Turn!`);
};

const currentPlayerSetter = () => ({
  setCurrentPlayer: (player) => {
    gameController.setCurrentPlayer(player);
  },
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
  evalTurn: function evalTurn(targetSquare) {
    if (gameController.getGameInProgress()) {
      const currentPlayer = gameController.getCurrentPlayer();
      const result = gameController.evalTurn(targetSquare);
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

const mothership = (() => {
  const state = {};

  return {
    ...currentPlayerSetter(state),
    ...opposingPlayerSetter(state),
    ...gameStarter(state),
    ...turnEvaluator(state),
  };
})();

export default mothership;
