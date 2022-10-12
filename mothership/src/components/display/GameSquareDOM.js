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

    this.guess = this.guess.bind(this);
    this.setShip = this.setShip.bind(this);
    this.sinkShip = this.sinkShip.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("Handle click!");
    const thisSquare = document.getElementById(this.props.gameSquareID);
    if (this.state.guessed === true) {
      return false;
    }
    if (this.state.hasShip === false) {
      this.guess();
      thisSquare.style.backgroundColor = "#0000ff";
      return true;
    }
    this.guess();
    thisSquare.style.backgroundColor = "#ffff00";
    return true;
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
    if (this.props.owner === gameController.getCurrentPlayer()) {
      console.log("success!");
    }
  }

  sinkShip() {
    this.setState({
      sunkShip: true,
    });
    const thisSquare = document.getElementById(this.props.gameSquareID);
    thisSquare.style.backgroundColor = "#ff0000";
  }

  render() {
    return (
      <div
        id={this.props.gameSquareID}
        className="gameSquare"
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default GameSquareDOM;
