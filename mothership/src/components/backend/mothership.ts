/* eslint-disable no-param-reassign */
import gameController from "./gameController";
import { GamePhase, GameSquareID, Player, SquareName } from "./types";

interface MothershipState {
  getCurrentPhase(): GamePhase;
  getCurrentPlayer(): Player;
  getOpposingPlayer(): Player;
}

const currentPhaseGetter = (state: MothershipState) => ({
  getCurrentPhase: () => state.getCurrentPhase(),
});

const currentPlayerGetter = (state: MothershipState) => ({
  getCurrentPlayer: () => state.getCurrentPlayer(),
});

const opposingPlayerGetter = (state: MothershipState) => ({
  getOpposingPlayer: () => state.getOpposingPlayer(),
});

const evalTurn = (state: MothershipState, attackSelection: SquareName) => {
  gameController.setCurrentPhase(
    `Evaluating ${state.getCurrentPlayer().getName()}'s turn`
  );
  const gameSquareID = `${attackSelection}p${
    gameController.getOpposingPlayer().getID()[6]
  }` as GameSquareID;
  if (gameController.getGameInProgress()) {
    const currentPlayer = gameController.getCurrentPlayer();
    const result = gameController.evalTurn(attackSelection);
    if (result === "Win") {
      gameController.setCurrentPhase(
        `Congratulatiing ${state.getCurrentPlayer().getName()} on xyr win!!!`
      );
      return {
        responseType: "showWin",
        message: `${state.getCurrentPlayer().getName()} Won!!!`,
      };
    }
    if (result === "Ship blown up") {
      // displayController.showBlownUp(gameSquareID);
    } else if (result === "Hit") {
      // displayController.showHit(gameSquareID);
    } else if (result === "Miss") {
      // displayController.showMiss(gameSquareID);
    }
    gameController.setCurrentPlayer(gameController.getOpposingPlayer());
    gameController.setOpposingPlayer(currentPlayer);
    return promptPlayer(state);
  }
  return {
    responseType: "error",
    message: "Error: Start a game before attacking!",
  };
};

const promptPlayer = (state: MothershipState) => {
  if (state.getCurrentPlayer().getSpecies() === "computer") {
    gameController.setCurrentPhase("Waiting for computer player");
    const attackSelection = state.getCurrentPlayer().attackRandomly();
    return evalTurn(state, attackSelection);
  }
  gameController.setCurrentPhase("Waiting for human player");
  return {
    responseType: "promptHumanAttackSelection",
    message: `${state.getCurrentPlayer().getName()}'s Turn`,
  };
};

const gameStarter = (state: MothershipState) => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return promptPlayer(state);
    }
    return {
      responseType: "error",
      message: "Error: Game already in progress!",
    };
  },
});

const attackSelectionReceiver = (state: MothershipState) => ({
  receiveAttackSelection: (gameSquareID: GameSquareID) => {
    if (state.getCurrentPhase() === "Waiting for human player") {
      if (state.getCurrentPlayer().getID() === `player${gameSquareID[3]}`) {
        return {
          responseType: "error",
          message:
            "Error: Select an attack on your opponant's gameboard, not your own!",
        };
      }
      const targetSquareName = gameSquareID.slice(0, 2);
      const attackSelection = state.getCurrentPlayer().attack(targetSquareName);
      return evalTurn(state, attackSelection);
    }
    return {
      responseType: "error",
      message: `Error: Wait until it's a human player's turn! The current phase is ${state.getCurrentPhase()}`,
    };
  },
});

const mothership = (() => {
  const state = {
    getCurrentPhase: () => gameController.getCurrentPhase(),
    getCurrentPlayer: () => gameController.getCurrentPlayer(),
    getOpposingPlayer: () => gameController.getOpposingPlayer(),
  };

  return {
    ...currentPhaseGetter(state),
    ...currentPlayerGetter(state),
    ...opposingPlayerGetter(state),
    ...gameStarter(state),
    ...attackSelectionReceiver(state),
  };
})();

export default mothership;
