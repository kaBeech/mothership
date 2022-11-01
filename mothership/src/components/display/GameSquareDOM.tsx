import React, { MouseEventHandler } from "react";
import { GameSquareID, ShipName } from "../backend/types";

interface GameSquareDOMProps {
  gameSquareID: GameSquareID;
  guessed: boolean;
  ship: ShipName | null;
  blownUp: boolean;
  onClick: Function;
}

const GameSquareDOM = (props: GameSquareDOMProps) => {
  let classes = "gameSquare";
  let guessedMarker = "";
  if (props.guessed) {
    classes += " guessed";
    guessedMarker = "X";
  }
  if (props.ship) {
    console.log(props.ship);
    classes += ` ${props.ship}`;
  }
  if (props.blownUp) {
    classes += " blownUp";
  }
  return (
    <div
      id={props.gameSquareID}
      className={classes}
      onClick={props.onClick as MouseEventHandler}
    >
      {guessedMarker}
    </div>
  );
};

export default GameSquareDOM;
