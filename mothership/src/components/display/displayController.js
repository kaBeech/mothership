import mothership from "../backend/mothership";

const shipShower = (state) => ({
  showShip: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("hasShip");
  },
});

const missShower = (state) => ({
  showMiss: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} missed!`;
  },
});

const hitShower = (state) => ({
  showHit: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} hit!`;
  },
});

const sunkShower = (state) => ({
  showSunk: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    gameSquare.classList.add("sunkShip");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} sunk a ship!`;
  },
});

const winShower = (state) => ({
  showWin: () => {
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} Won!!!`;
  },
});

const turnNotificationShower = (state) => ({
  showTurnNotification: () => {
    console.log(document.getElementById("statusMessage"));
    // state.getStatusMessage().textContent = `${state
    //   .getCurrentPlayer()
    //   .getName()}'s Turn`;
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
    ...sunkShower(state),
    ...winShower(state),
    ...turnNotificationShower(state),
  };
})();

export default displayController;
