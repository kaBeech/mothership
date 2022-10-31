import React, { Component, MouseEventHandler } from "react";
import mothership from "../backend/mothership";
import { GameSquareDOMProps, PlayerID } from "../backend/types";

interface GameSquareDOMState {
  guessed: boolean;
  hasShip: boolean;
  hitShip: boolean;
  blownUpShip: boolean;
  getSelf: Function;
  player: PlayerID;
}

class GameSquareDOM extends Component<GameSquareDOMProps, GameSquareDOMState> {
  constructor(props: GameSquareDOMProps) {
    super(props);

    this.state = {
      guessed: false,
      hasShip: false,
      hitShip: false,
      blownUpShip: false,
      getSelf: () => document.getElementById(this.props.gameSquareID),
      player: `player${this.props.gameSquareID[3]}` as PlayerID,
    };

    this.handleClick = this.handleClick.bind(this);
    this.guess = this.guess.bind(this);
    this.setShip = this.setShip.bind(this);
    this.blowUpShip = this.blowUpShip.bind(this);
  }

  // getSelf() {
  //   const self = document.getElementById(this.props.gameSquareID);
  //   if (self === null) {return `Error: getSelf() called on invalid element. No element found with ID matching GameSquareID: ${gameSquareID}`}
  //   return self;
  // }

  handleClick() {
    console.log("Handle click!");

    // If current player's board is clicked during a setup phase,
    // process a ship placement
    if (
      this.state.player === mothership.getCurrentPlayer().getID() &&
      mothership.getCurrentPhase() == null
      // mothership.getCurrentPhase() == ("setup")
    ) {
      if (this.state.hasShip === false) {
        this.setShip(this.state);
        this.state.getSelf().style.backgroundColor = "#00ff00";
        return true;
      }
      return false;
    }

    // If opposing player's board is clicked during an attack phase,
    // process an attack
    if (
      this.state.player === mothership.getOpposingPlayer().getID() &&
      mothership.getCurrentPhase() == null
      // mothership.getCurrentPhase() == ("attack")
    ) {
      if (this.state.guessed === true) {
        return false;
      }
      this.guess(this.state);
      return mothership.receiveAttackSelection(this.props.gameSquareID);
    }

    return false;
  }

  guess(state: GameSquareDOMState) {
    this.setState({
      guessed: true,
    });
    state.getSelf().classList.add("guessed");
  }

  setShip(state: GameSquareDOMState) {
    this.setState({
      hasShip: true,
    });
    state.getSelf().classList.add("hasShip");
  }

  hitShip(state: GameSquareDOMState) {
    this.setState({
      hitShip: true,
    });
    state.getSelf().classList.add("hitShip");
  }

  blowUpShip(state: GameSquareDOMState) {
    this.setState({
      blownUpShip: true,
    });
    state.getSelf().classList.add("blownUpShip");
  }

  render() {
    return (
      <div
        id={this.props.gameSquareID}
        className="gameSquare"
        onClick={this.props.onClick as MouseEventHandler}
        // onClick={this.setShip}
      ></div>
    );
  }
}

export default GameSquareDOM;
