import React, { useEffect, useState } from "react";
import mothership from "../backend/mothership";
import GameboardDOM from "./GameboardDOM";
import StatusMessage from "./StatusMessage";
import { GameSquareID } from "../backend/types";

interface DisplayControllerProps {}

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
    const gameSquare = document.getElementById(gameSquareID) as HTMLElement;
    gameSquare.classList.add("guessed");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} missed!`;
  },
});

const hitShower = (state: DisplayControllerState) => ({
  showHit: (gameSquareID: GameSquareID) => {
    console.log(document.getElementById(gameSquareID));
    const gameSquare = document.getElementById(gameSquareID) as HTMLElement;
    gameSquare.classList.add("guessed");
    gameSquare.classList.add("hitShip");
    state.getStatusMessage().textContent = `${state
      .getCurrentPlayer()
      .getName()} hit!`;
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

const numberShower = () => ({
  showNumber: () => {
    console.log(2);
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
    ...numberShower(),
  };
})();

const dummyDisplayController = displayController;
dummyDisplayController.showNumber();

// ===========================

const DisplayController = (props: DisplayControllerProps) => {
  return (
    <div className="flex column">
      <h1> * MOTHERSHIP * </h1>
      <StatusMessage />
      <div id="cardSection" className="flex">
        <div className="flex">
          <h2 id="playerBoardLabel" className="gameboardLabel vertText">
            YOUR BOARD
          </h2>
          <div className="flex column">
            <GameboardDOM player="player0" />
            <div
              id="startGameButton"
              onClick={mothership.startGame}
              className="button"
            >
              Start Game
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex column">
            <GameboardDOM player="player1" />
            <div className="button">Rules</div>
          </div>
          <h2 id="opposingBoardLabel" className="gameboardLabel vertText">
            OPPOSING BOARD
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DisplayController;
