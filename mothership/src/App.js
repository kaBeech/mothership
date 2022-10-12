import React, { Component } from "react";
import DisplayController from "./components/display/DisplayController";
import GameboardDOM from "./components/display/GameboardDOM";

class App extends Component {
  render() {
    return (
      <div className="flex column">
        <h1> *MOTHERSHIP* </h1>
        <DisplayController />
        <div id="cardSection" className="flex">
          <div className="flex">
            <h2 id="playerBoardLabel" className="gameboardLabel vertText">
              YOUR BOARD
            </h2>
            <div className="flex column">
              <GameboardDOM player="p1" />
              <div className="button">Start Game</div>
            </div>
          </div>
          <div className="flex">
            <div className="flex column">
              <GameboardDOM player="p2" />
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
