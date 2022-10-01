/* eslint-disable no-param-reassign */
import gameController from "./gameController";

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
      return this.controlGame();
    }
    return console.log("error");
  },
});

const gameRunner = (state) => ({
  controlGame: function controlGame() {
    if (this.getGameInProgress()) {
      const targetSquare = this.promptPlayer(state.currentPlayer);
      const { currentPlayer } = state;
      if (!currentPlayer.opposingGameboard.receiveAttack(targetSquare)) {
        console.log("You missed!");
      } else {
        targetSquare.getShip().takeDamage();
        if (currentPlayer.opposingGameboard.checkWin()) {
          this.setGameInProgress(false);
        } else {
          this.setCurrentPlayer(state.opposingPlayer);
          this.setOpposingPlayer(currentPlayer);
        }
      }
    } else {
      console.log("Game Won!!!");
    }
  },
});

const playerPrompter = (state) => ({
  promptPlayer: function promptPlayer(targetPlayer) {
    if (targetPlayer.getSpecies() === "computer") {
      return targetPlayer.attackRandomly();
    }
    // Await human move - next 2 lines are scratch content
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
    ...gameRunner(state),
    ...playerPrompter(state),
  };
})();

export { mothership, gameController };
