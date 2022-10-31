/* eslint-disable no-useless-concat */
import React, { Component } from "react";
import {
  GameSquareID,
  GameSquaresArray,
  PlayerID,
  SingleDigit,
} from "../backend/types";
import GameSquareDOM from "./GameSquareDOM";

interface GameboardColumnDOMProps {
  columnNumber: `${SingleDigit}`;
  gameSquares: GameSquaresArray;
  player: PlayerID;
}
interface GameboardColumnDOMState {}

class GameboardColumnDOM extends Component<
  GameboardColumnDOMProps,
  GameboardColumnDOMState
> {
  render() {
    return (
      <div className="gameboardColumn flex column">
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "0" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[0].guessed}
          ship={this.props.gameSquares[0].ship}
          blownUp={this.props.gameSquares[0].blownUp}
          onClick={this.props.gameSquares[0].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "1" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[1].guessed}
          ship={this.props.gameSquares[1].ship}
          blownUp={this.props.gameSquares[1].blownUp}
          onClick={this.props.gameSquares[1].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "2" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[2].guessed}
          ship={this.props.gameSquares[2].ship}
          blownUp={this.props.gameSquares[2].blownUp}
          onClick={this.props.gameSquares[2].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "3" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[3].guessed}
          ship={this.props.gameSquares[3].ship}
          blownUp={this.props.gameSquares[3].blownUp}
          onClick={this.props.gameSquares[3].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "4" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[4].guessed}
          ship={this.props.gameSquares[4].ship}
          blownUp={this.props.gameSquares[4].blownUp}
          onClick={this.props.gameSquares[4].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "5" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[5].guessed}
          ship={this.props.gameSquares[5].ship}
          blownUp={this.props.gameSquares[5].blownUp}
          onClick={this.props.gameSquares[5].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "6" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[6].guessed}
          ship={this.props.gameSquares[6].ship}
          blownUp={this.props.gameSquares[6].blownUp}
          onClick={this.props.gameSquares[6].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "7" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[7].guessed}
          ship={this.props.gameSquares[7].ship}
          blownUp={this.props.gameSquares[7].blownUp}
          onClick={this.props.gameSquares[7].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "8" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[8].guessed}
          ship={this.props.gameSquares[8].ship}
          blownUp={this.props.gameSquares[8].blownUp}
          onClick={this.props.gameSquares[8].onClick}
        />
        <GameSquareDOM
          gameSquareID={
            (this.props.columnNumber +
              "9" +
              "p" +
              this.props.player[6]) as GameSquareID
          }
          guessed={this.props.gameSquares[9].guessed}
          ship={this.props.gameSquares[9].ship}
          blownUp={this.props.gameSquares[9].blownUp}
          onClick={this.props.gameSquares[9].onClick}
        />
      </div>
    );
  }
}

export default GameboardColumnDOM;
