/* eslint-disable no-param-reassign */
import displayController from "../display/displayController";
import gameController from "./gameController";
import { GamePhase, GameSquareID, Player, SquareName } from "./types";

interface MothershipState {
  currentPhase: GamePhase;
  currentPlayer: Player;
  opposingPlayer: Player;
  promptPlayer: Function;
}

const currentPhaseGetter = (state: MothershipState) => ({
  getCurrentPhase: () => state.currentPhase,
});

const currentPlayerGetter = (state: MothershipState) => ({
  getCurrentPlayer: () => state.currentPlayer,
});

const currentPlayerSetter = () => ({
  setCurrentPlayer: (player: Player) => {
    gameController.setCurrentPlayer(player);
  },
});

const opposingPlayerGetter = (state: MothershipState) => ({
  getOpposingPlayer: () => state.opposingPlayer,
});

const opposingPlayerSetter = () => ({
  setOpposingPlayer: (player: Player) => {
    gameController.setOpposingPlayer(player);
  },
});

const gameStarter = (state: MothershipState) => ({
  startGame: function startGame() {
    if (!gameController.getGameInProgress()) {
      gameController.setGameInProgress(true);
      return state.promptPlayer();
    }
    return console.log("error");
  },
});

const turnEvaluator = (state: MothershipState) => ({
  evalTurn: function evalTurn(attackSelection: SquareName) {
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

const attackSelectionReceiver = (state: MothershipState) => ({
  receiveAttackSelection: (gameSquareID: GameSquareID) => {
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
    ...currentPlayerSetter(),
    ...opposingPlayerGetter(state),
    ...opposingPlayerSetter(),
    ...gameStarter(state),
    ...turnEvaluator(state),
    ...attackSelectionReceiver(state),
  };
})();

export default mothership;
