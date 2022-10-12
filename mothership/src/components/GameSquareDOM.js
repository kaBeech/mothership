import React, { Component } from "react";

class GameSquareDOM extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(targetSquareID) {
    console.log("Handle click!");
    const targetSquare = document.getElementById(targetSquareID);
    targetSquare.style.backgroundColor = "#00ff88";
    const testTarget = document.getElementById("p101");
    testTarget.style.backgroundColor = "#0088ff";
  }

  render() {
    return (
      <div
        id={this.props.gameSquareID}
        className="gameSquare"
        onClick={() => this.handleClick(this.props.gameSquareID)}
      >
        Hola Mundo!
      </div>
    );
  }
}

export default GameSquareDOM;
