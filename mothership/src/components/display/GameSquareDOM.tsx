import React, { MouseEventHandler } from "react";
import { GameSquareDOMProps } from "../backend/types";

const GameSquareDOM = (props: GameSquareDOMProps) => {
  let classes = "gameSquare";
  if (props.guessed) {
    classes.concat(" guessed");
  }
  if (props.ship) {
    classes.concat(` ${props.ship}`);
  }
  if (props.blownUp) {
    classes.concat(" blownUp");
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
