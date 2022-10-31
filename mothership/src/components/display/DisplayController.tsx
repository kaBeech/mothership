import React, { useState } from "react";
import mothership from "../backend/mothership";
import {
  GameboardColumnsArray,
  GameboardsArray,
  GameSquareID,
  GameSquaresArray,
} from "../backend/types";
import GameboardDOM from "./GameboardDOM";
import StatusMessage from "./StatusMessage";

// =============Old Display Controller State And Exports==============

const turnNotificationShower = () => ({
  showTurnNotification: () => {},
});

const dummyDisplayController = (() => {
  const state = {
    getCurrentPhase: Function,
    getCurrentPlayer: Function,
    getOpposingPlayer: Function,
    getStatusMessage: Function,
  };
  return {
    state,
    // ...shipShower(state),
    // ...missShower(state),
    // ...hitShower(state),
    // ...blownUpShower(state),
    // ...winShower(state),
    ...turnNotificationShower(),
  };
})();

dummyDisplayController.showTurnNotification();

// ============Props List===============

// StatusMessage: message
// GameboardDOM: onClick, player(currentOrOpposing), gameboardColumns
// GameboardColumnDOM: onClick, player(currentOrOpposing), gameSquares
// GameSquareDOM: onClick, player(currentOrOpposing), gameSquareID, guessed, ship, blownUp

// ============State List===============

// DisplayController: gameboards, message
// StatusMessage:
// GameboardDOM:
// GameboardColumnDOM:
// GameSquareDOM:

// =============Methods for mothership.ts==============

// startGame() => {Object including the initialized board and the first move}
// receiveAttackSelection(gameSquareID) => {Object including changes to StatusMessage and GameSuares}

// =============Return to Code==============

interface DisplayControllerProps {}

const DisplayController = (props: DisplayControllerProps) => {
  const initialGameboards = [] as GameboardsArray;
  while (initialGameboards.length < 2) {
    const initialGameboardColumns = [] as GameboardColumnsArray;
    while (initialGameboardColumns.length < 10) {
      const initialGameSquares = [] as GameSquaresArray;
      while (initialGameSquares.length < 10) {
        const initGameSquareID =
          `${initialGameboardColumns.length}${initialGameSquares.length}p${initialGameboards.length}` as GameSquareID;
        initialGameSquares.push({
          gameSquareID: initGameSquareID,
          guessed: false,
          ship: null,
          blownUp: false,
          onClick: () => handleAttackSelection(initGameSquareID),
        });
      }
      initialGameboardColumns.push(initialGameSquares);
    }
    initialGameboards.push(initialGameboardColumns);
  }
  const [gameboards, setGameboards] = useState(initialGameboards);
  const [message, setMessage] = useState("Click Start Game To Begin!");

  const handleAttackSelection = (square: GameSquareID) => {
    const result = mothership.receiveAttackSelection(square);
    if (result.responseType === "error") {
      setMessage(
        `Error received from mothership.receiveAttackSelection(${square}): '${result.responseType}'`
      );
    } else if (result.responseType === "promptHumanAttackSelection") {
      setMessage(result.message);
      updateGameboards(result.squareUpdates);
    } else if (result.responseType === "showWin") {
      setMessage(result.message);
      // TBA
    } else {
      setMessage(
        `Error: Unfamiliar response type '${result.responseType}' received from mothership.receiveAttackSelection(${square})`
      );
    }
  };

  const updateGameboards = (...squareUpdates: GameSquaresArray) => {
    const updatedGameboards = gameboards.slice();
    for (const updatedSquare of squareUpdates) {
      const id = updatedSquare.gameSquareID;
      updatedGameboards[id[3]][id[0]][id[1]] = {
        gameSquareID: id,
        guessed: updatedSquare.guessed,
        ship: updatedSquare.ship,
        blownUp: updatedSquare.blownUp,
      };
    }
    setGameboards(updatedGameboards);
  };

  const startGame = () => {
    const result = mothership.startGame();
    if (result.responseType === "error") {
      setMessage(
        `Error received from mothership.startGame(): '${result.message}'`
      );
    } else if (result.responseType === "promptHumanAttackSelection") {
      setMessage(result.message);
      updateGameboards(result.squareUpdates);
    } else {
      setMessage(
        `Error: Unfamiliar response type '${result.responseType}' received from mothership.startGame()`
      );
    }
  };

  return (
    <div className="flex column">
      <h1> * MOTHERSHIP * </h1>
      <StatusMessage message={message} />
      <div id="cardSection" className="flex">
        <div className="flex">
          <h2 id="playerBoardLabel" className="gameboardLabel vertText">
            YOUR BOARD
          </h2>
          <div className="flex column">
            <GameboardDOM player="player0" gameboardColumns={gameboards[0]} />
            <div id="startGameButton" onClick={startGame} className="button">
              Start Game
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex column">
            <GameboardDOM player="player1" gameboardColumns={gameboards[1]} />
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
