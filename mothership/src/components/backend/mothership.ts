/* eslint-disable no-param-reassign */
import displayController from "../display/displayController";
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

// const currentPlayerSetter = () => ({
//   setCurrentPlayer: (player: Player) => {
//     gameController.setCurrentPlayer(player);
//   },
// });

const opposingPlayerGetter = (state: MothershipState) => ({
  getOpposingPlayer: () => state.getOpposingPlayer(),
});

// const opposingPlayerSetter = () => ({
//   setOpposingPlayer: (player: Player) => {
//     gameController.setOpposingPlayer(player);
//   },
// });

const evalTurn = (state: MothershipState, attackSelection: SquareName) => {
  gameController.setCurrentPhase(
    `Evaluating ${state.getCurrentPlayer().getName()}'s turn`
  );
  const gameSquareID = `${attackSelection}p${
    gameController.getOpposingPlayer().getID()[6]
  }`;
  if (gameController.getGameInProgress()) {
    const currentPlayer = gameController.getCurrentPlayer();
    const result = gameController.evalTurn(attackSelection);
    if (result === "Win") {
      gameController.setCurrentPhase(
        `Congratulatiing ${state.getCurrentPlayer().getName()} on xyr win!!!`
      );
      return displayController.showWin();
    }
    if (result === "Sunk") {
      displayController.showSunk(gameSquareID);
    } else if (result === "Hit") {
      displayController.showHit(gameSquareID);
    } else if (result === "Miss") {
      displayController.showMiss(gameSquareID);
      // return "miss";
    }
    gameController.setCurrentPlayer(gameController.getOpposingPlayer());
    gameController.setOpposingPlayer(currentPlayer);
    return promptPlayer(state);
  }
  return "Error: Start a game before attacking!";
};

const promptPlayer = (state: MothershipState) => {
  if (state.getCurrentPlayer().getSpecies() === "computer") {
    gameController.setCurrentPhase("Waiting for computer player");
    const attackSelection = state.getCurrentPlayer().attackRandomly();
    return evalTurn(state, attackSelection);
  }
  gameController.setCurrentPhase("Waiting for human player");
  displayController.showTurnNotification();
  return "Prompted human player";
};

const gameStarter = (state: MothershipState) => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return promptPlayer(state);
    }
    return "Error: Game already in progress!";
  },
});

const attackSelectionReceiver = (state: MothershipState) => ({
  receiveAttackSelection: (gameSquareID: GameSquareID) => {
    if (state.getCurrentPhase() === "Waiting for human player") {
      if (state.getCurrentPlayer().getID() === `player${gameSquareID[3]}`) {
        return "Error: Select an attack on your opponant's gameboard, not your own!";
      }
      const targetSquareName = gameSquareID.slice(0, 2);
      const attackSelection = state.getCurrentPlayer().attack(targetSquareName);
      return evalTurn(state, attackSelection);
    }
    return `Error: Wait until it's a human player's turn! The current phase is ${state.getCurrentPhase()}`;
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
    // ...currentPlayerSetter(),
    ...opposingPlayerGetter(state),
    // ...opposingPlayerSetter(),
    ...gameStarter(state),
    ...attackSelectionReceiver(state),
  };
})();

export default mothership;
