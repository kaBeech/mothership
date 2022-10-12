import React, { Component } from "react";

class GameSquareDOM extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("Handle click!");
  }

  render() {
    return (
      <div
        id={this.props.gameSquareID}
        className="gameSquare"
        onClick={this.handleClick}
      >
        Hola Mundo!
      </div>
    );
  }
}

export default GameSquareDOM;
