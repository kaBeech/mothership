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
      // return "miss";
    }
    gameController.setCurrentPlayer(gameController.getOpposingPlayer());
    gameController.setOpposingPlayer(currentPlayer);
    return promptPlayer(state);
  }
  return console.log("error");
};

const promptPlayer = (state: MothershipState) => {
  if (state.getCurrentPlayer().getSpecies() === "computer") {
    const attackSelection = state.getCurrentPlayer().attackRandomly();
    return evalTurn(state, attackSelection);
  }
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
    const targetSquareName = gameSquareID.slice(0, 2);
    const attackSelection = state.getCurrentPlayer().attack(targetSquareName);
    return evalTurn(state, attackSelection);
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
