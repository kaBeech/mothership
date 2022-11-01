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
  if (props.guessed) {
    classes += " guessed";
  }
  if (props.ship) {
    classes += ` hasShip ${props.ship}`;
  }
  if (props.blownUp) {
    classes += " blownUp";
  }
  return (
    <div
      id={props.gameSquareID}
      className={classes}
      onClick={props.onClick as MouseEventHandler}
    ></div>
  );
};

export default GameSquareDOM;
