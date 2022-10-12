import React, { Component } from "react";
import gameController from "../backend/gameController";

class GameSquareDOM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: false,
      hasShip: false,
      sunkShip: false,
    };

    this.getSelf = this.getSelf.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.guess = this.guess.bind(this);
    this.setShip = this.setShip.bind(this);
    this.sinkShip = this.sinkShip.bind(this);
  }

  getSelf() {
    const self = document.getElementById(this.props.gameSquareID);
    return self;
  }

  handleClick() {
    console.log("Handle click!");

    // If current player's board is clicked during a setup phase,
    // process a ship placement
    if (
      this.props.player === gameController.getCurrentPlayer().getID() &&
      gameController.getCurrentPhase() == null
      // gameController.getCurrentPhase() == ("setup")
    ) {
      if (this.state.hasShip === false) {
        this.setShip();
        this.getSelf().style.backgroundColor = "#00ff00";
        return true;
      }
      return false;
    }

    // If opposing player's board is clicked during an attack phase,
    // process an attack
    if (
      this.props.player === gameController.getOpposingPlayer().getID() &&
      gameController.getCurrentPhase() == null
      // gameController.getCurrentPhase() == ("attack")
    ) {
      if (this.state.guessed === true) {
        return false;
      }
      if (this.state.hasShip === false) {
        this.guess();
        this.getSelf().style.backgroundColor = "#0000ff";
        return gameController.receiveAttackSelection(this.props.gameSquareID);
      }
      if (this.state.hasShip === true) {
        this.guess();
        this.getSelf().style.backgroundColor = "#ffff00";
        return true;
      }
    }

    return false;
  }

  guess() {
    this.setState({
      guessed: true,
    });
  }

  setShip() {
    this.setState({
      hasShip: true,
    });
  }

  sinkShip() {
    this.setState({
      sunkShip: true,
    });
    this.getSelf().style.backgroundColor = "#ff0000";
  }

  render() {
    return (
      <div
        id={this.props.gameSquareID}
        className="gameSquare"
        onClick={this.handleClick}
        // onClick={this.setShip}
      ></div>
    );
  }
}

export default GameSquareDOM;
