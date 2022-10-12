import React, { Component } from "react";
import GameboardDOM from "./components/GameboardDOM";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello World! </h1>
        <div className="flex">
          <GameboardDOM player="p1" />
          <GameboardDOM player="p2" />
        </div>
      </div>
    );
  }
}

export default App;
