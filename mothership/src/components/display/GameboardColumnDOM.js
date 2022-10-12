/* eslint-disable no-useless-concat */
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
          gameSquareID={
            this.props.columnNumber + "0" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "1" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "2" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "3" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "4" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "5" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "6" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "7" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "8" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
        <GameSquareDOM
          gameSquareID={
            this.props.columnNumber + "9" + "p" + this.props.player[6]
          }
          player={this.props.player}
        />
      </div>
    );
  }
}

export default GameboardColumnDOM;
