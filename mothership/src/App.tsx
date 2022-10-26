import React, { Component } from "react";
import mothership from "./components/backend/mothership";
import GameboardDOM from "./components/display/GameboardDOM";
import StatusMessage from "./components/display/StatusMessage";

class App extends Component {
  render() {
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
  }
}

export default App;
