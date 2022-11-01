import React from "react";
import { GameboardColumnsArray, PlayerID } from "../backend/types";
import GameboardColumnDOM from "./GameboardColumnDOM";

interface GameboardDOMProps {
  player: PlayerID;
  gameboardColumns: GameboardColumnsArray;
}

const GameboardDOM = (props: GameboardDOMProps) => {
  return (
    <div className="gameboard flex">
      <GameboardColumnDOM
        columnNumber="0"
        player={props.player}
        gameSquares={props.gameboardColumns[0]}
      />
      <GameboardColumnDOM
        columnNumber="1"
        player={props.player}
        gameSquares={props.gameboardColumns[1]}
      />
      <GameboardColumnDOM
        columnNumber="2"
        player={props.player}
        gameSquares={props.gameboardColumns[2]}
      />
      <GameboardColumnDOM
        columnNumber="3"
        player={props.player}
        gameSquares={props.gameboardColumns[3]}
      />
      <GameboardColumnDOM
        columnNumber="4"
        player={props.player}
        gameSquares={props.gameboardColumns[4]}
      />
      <GameboardColumnDOM
        columnNumber="5"
        player={props.player}
        gameSquares={props.gameboardColumns[5]}
      />
      <GameboardColumnDOM
        columnNumber="6"
        player={props.player}
        gameSquares={props.gameboardColumns[6]}
      />
      <GameboardColumnDOM
        columnNumber="7"
        player={props.player}
        gameSquares={props.gameboardColumns[7]}
      />
      <GameboardColumnDOM
        columnNumber="8"
        player={props.player}
        gameSquares={props.gameboardColumns[8]}
      />
      <GameboardColumnDOM
        columnNumber="9"
        player={props.player}
        gameSquares={props.gameboardColumns[9]}
      />
    </div>
  );
};

export default GameboardDOM;
