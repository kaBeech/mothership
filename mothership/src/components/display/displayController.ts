import mothership from "../backend/mothership";
import { GameSquareID } from "../backend/types";

interface DisplayControllerState {
  getCurrentPhase: Function;
  getCurrentPlayer: Function;
  getOpposingPlayer: Function;
  getStatusMessage: Function;
}

const shipShower = (state: DisplayControllerState) => ({
  showShip: (gameSquareID: GameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    if (gameSquare === null) {
      return `Error: No element found with ID matching GameSquareID: ${gameSquareID}`;
    }
    gameSquare.classList.add("hasShip");
  },
});

const missShower = (state: DisplayControllerState) => ({
  showMiss: (gameSquareID: GameSquareID) => {
    console.log(document.getElementById(gameSquareID));
    // const gameSquare = document.getElementById(gameSquareID);
    // gameSquare.classList.add("guessed");
    // state.getStatusMessage().textContent = `${state
    //   .getCurrentPlayer()
    //   .getName()} missed!`;
  },
});

const hitShower = (state: DisplayControllerState) => ({
  showHit: (gameSquareID: GameSquareID) => {
    console.log(document.getElementById(gameSquareID));
    // const gameSquare = document.getElementById(gameSquareID);
    // gameSquare.classList.add("guessed");
    // gameSquare.classList.add("hitShip");
    // state.getStatusMessage().textContent = `${state
    //   .getCurrentPlayer()
    //   .getName()} hit!`;
  },
});

const blownUpShower = (state: DisplayControllerState) => ({
  showBlownUp: (gameSquareID: GameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    if (gameSquare === null) {
      return `Error: No element found with ID matching GameSquareID: ${gameSquareID}`;
    }
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    gameSquare.classList.add("blownUpShip");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} blew up a ship!`;
  },
});

const winShower = (state: DisplayControllerState) => ({
  showWin: () => {
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} Won!!!`;
  },
});

const turnNotificationShower = (state: DisplayControllerState) => ({
  showTurnNotification: () => {
    console.log(state.getStatusMessage());
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()}'s Turn`;
  },
});

const displayController = (() => {
  const state = {
    getCurrentPhase: () => mothership.getCurrentPhase(),
    getCurrentPlayer: () => mothership.getCurrentPlayer(),
    getOpposingPlayer: () => mothership.getOpposingPlayer(),
    getStatusMessage: () => document.getElementById("statusMessage"),
  };

  return {
    ...shipShower(state),
    ...missShower(state),
    ...hitShower(state),
    ...blownUpShower(state),
    ...winShower(state),
    ...turnNotificationShower(state),
  };
})();

export default displayController;
