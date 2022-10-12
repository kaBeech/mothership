import React, { Component } from "react";
import GameSquareDOM from "./GameSquareDOM";

class GameboardColumnDOM extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameboardColumn flex column">
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "0"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "1"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "2"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "3"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "4"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "5"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "6"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "7"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "8"}
        />
        <GameSquareDOM
          gameSquareID={this.props.player + this.props.columnNumber + "9"}
        />
      </div>
    );
  }
}

export default GameboardColumnDOM;
