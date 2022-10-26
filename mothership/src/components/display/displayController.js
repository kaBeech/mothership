import mothership from "../backend/mothership";

const shipShower = (state) => ({
  showShip: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("hasShip");
  },
});

const missShower = (state) => ({
  showMiss: (gameSquareID) => {
    console.log(document.getElementById(gameSquareID));
    // const gameSquare = document.getElementById(gameSquareID);
    // gameSquare.classList.add("guessed");
    // state.getStatusMessage().textContent = `${state
    //   .getCurrentPlayer()
    //   .getName()} missed!`;
  },
});

const hitShower = (state) => ({
  showHit: (gameSquareID) => {
    console.log(document.getElementById(gameSquareID));
    // const gameSquare = document.getElementById(gameSquareID);
    // gameSquare.classList.add("guessed");
    // gameSquare.classList.add("hitShip");
    // state.getStatusMessage().textContent = `${state
    //   .getCurrentPlayer()
    //   .getName()} hit!`;
  },
});

const blownUpShower = (state) => ({
  showBlownUp: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    gameSquare.classList.add("blownUpShip");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} blew up a ship!`;
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
    ...blownUpShower(state),
    ...winShower(state),
    ...turnNotificationShower(state),
  };
})();

export default displayController;
