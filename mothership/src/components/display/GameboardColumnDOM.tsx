/* eslint-disable no-useless-concat */
import React from "react";
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

const GameboardColumnDOM = (props: GameboardColumnDOMProps) => {
  return (
    <div className="gameboardColumn flex column">
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "0" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[0].guessed}
        ship={props.gameSquares[0].ship}
        blownUp={props.gameSquares[0].blownUp}
        onClick={props.gameSquares[0].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "1" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[1].guessed}
        ship={props.gameSquares[1].ship}
        blownUp={props.gameSquares[1].blownUp}
        onClick={props.gameSquares[1].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "2" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[2].guessed}
        ship={props.gameSquares[2].ship}
        blownUp={props.gameSquares[2].blownUp}
        onClick={props.gameSquares[2].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "3" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[3].guessed}
        ship={props.gameSquares[3].ship}
        blownUp={props.gameSquares[3].blownUp}
        onClick={props.gameSquares[3].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "4" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[4].guessed}
        ship={props.gameSquares[4].ship}
        blownUp={props.gameSquares[4].blownUp}
        onClick={props.gameSquares[4].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "5" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[5].guessed}
        ship={props.gameSquares[5].ship}
        blownUp={props.gameSquares[5].blownUp}
        onClick={props.gameSquares[5].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "6" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[6].guessed}
        ship={props.gameSquares[6].ship}
        blownUp={props.gameSquares[6].blownUp}
        onClick={props.gameSquares[6].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "7" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[7].guessed}
        ship={props.gameSquares[7].ship}
        blownUp={props.gameSquares[7].blownUp}
        onClick={props.gameSquares[7].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "8" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[8].guessed}
        ship={props.gameSquares[8].ship}
        blownUp={props.gameSquares[8].blownUp}
        onClick={props.gameSquares[8].onClick}
      />
      <GameSquareDOM
        gameSquareID={
          (props.columnNumber + "9" + "p" + props.player[6]) as GameSquareID
        }
        guessed={props.gameSquares[9].guessed}
        ship={props.gameSquares[9].ship}
        blownUp={props.gameSquares[9].blownUp}
        onClick={props.gameSquares[9].onClick}
      />
    </div>
  );
};

export default GameboardColumnDOM;
