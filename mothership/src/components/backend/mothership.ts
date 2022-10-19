/* eslint-disable no-param-reassign */
import displayController from "../display/displayController";
import gameController from "./gameController";
import { GamePhase, GameSquareID, Player, SquareName } from "./types";

interface MothershipState {
  currentPhase: GamePhase;
  currentPlayer: Player;
  opposingPlayer: Player;
}

const currentPhaseGetter = (state: MothershipState) => ({
  getCurrentPhase: () => state.currentPhase,
});

const currentPlayerGetter = (state: MothershipState) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

// const currentPlayerSetter = () => ({
//   setCurrentPlayer: (player: Player) => {
//     gameController.setCurrentPlayer(player);
//   },
// });

const opposingPlayerGetter = (state: MothershipState) => ({
  getOpposingPlayer: () => state.opposingPlayer,
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
  if (state.currentPlayer.getSpecies() === "computer") {
    const attackSelection = state.currentPlayer.attackRandomly();
    return evalTurn(state, attackSelection);
  }
  return displayController.showTurnNotification();
};

const gameStarter = (state: MothershipState) => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return promptPlayer(state);
    }
    return console.log("error");
  },
});

const attackSelectionReceiver = (state: MothershipState) => ({
  receiveAttackSelection: (gameSquareID: GameSquareID) => {
    const targetSquareName = gameSquareID.slice(0, 2);
    const attackSelection = state.currentPlayer.attack(targetSquareName);
    return evalTurn(state, attackSelection);
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
    // ...currentPlayerSetter(),
    ...opposingPlayerGetter(state),
    // ...opposingPlayerSetter(),
    ...gameStarter(state),
    ...attackSelectionReceiver(state),
  };
})();

export default mothership;
