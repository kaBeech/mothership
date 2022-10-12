import mothership from "../backend/mothership";

const statusMessage = document.getElementById("statusMessage");

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
    statusMessage.textContent = `${state.currentPlayer.getName()} missed!`;
  },
});

const hitShower = (state) => ({
  showHit: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    statusMessage.textContent = `${state.currentPlayer.getName()} hit!`;
  },
});

const sunkShower = (state) => ({
  showSunk: (gameSquareID) => {
    const gameSquare = document.getElementById(gameSquareID);
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    gameSquare.classList.add("sunkShip");
    statusMessage.textContent = `${state.currentPlayer.getName()} sunk a ship!`;
  },
});

const winShower = (state) => ({
  showWin: () => {
    statusMessage.textContent = `${state.currentPlayer.getName()} Won!!!`;
  },
});

const displayController = (() => {
  const state = {
    currentPhase: () => mothership.getCurrentPhase(),
    currentPlayer: () => mothership.getCurrentPlayer(),
    opposingPlayer: () => mothership.getOpposingPlayer(),
  };

  return {
    ...shipShower(state),
    ...missShower(state),
    ...hitShower(state),
    ...sunkShower(state),
    ...winShower(state),
  };
})();

export default displayController;
