import React, { Component } from "react";
import mothership from "../backend/mothership";

class GameSquareDOM extends Component {
  constructor(props) {
    super(props);

    this.state = {
      guessed: false,
      hasShip: false,
      hitShip: false,
      blownUpShip: false,
    };

    this.getSelf = this.getSelf.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.guess = this.guess.bind(this);
    this.setShip = this.setShip.bind(this);
    this.blowUpShip = this.blowUpShip.bind(this);
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
      this.props.player === mothership.getCurrentPlayer().getID() &&
      mothership.getCurrentPhase() == null
      // mothership.getCurrentPhase() == ("setup")
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
      this.props.player === mothership.getOpposingPlayer().getID() &&
      mothership.getCurrentPhase() == null
      // mothership.getCurrentPhase() == ("attack")
    ) {
      if (this.state.guessed === true) {
        return false;
      }
      this.guess();
      return mothership.receiveAttackSelection(this.props.gameSquareID);
    }

    return false;
  }

  guess() {
    this.setState({
      guessed: true,
    });
    this.getSelf().classList.add("guessed");
  }

  setShip() {
    this.setState({
      hasShip: true,
    });
    this.getSelf().classList.add("hasShip");
  }

  hitShip() {
    this.setState({
      hitShip: true,
    });
    this.getSelf().classList.add("hitShip");
  }

  blowUpShip() {
    this.setState({
      blownUpShip: true,
    });
    this.getSelf().classList.add("blownUpShip");
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
