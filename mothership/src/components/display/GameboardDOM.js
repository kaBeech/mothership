import React, { Component } from "react";
import GameboardColumnDOM from "./GameboardColumnDOM";

class GameboardDOM extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameboard flex">
        <GameboardColumnDOM columnNumber="0" player={this.props.player} />
        <GameboardColumnDOM columnNumber="1" player={this.props.player} />
        <GameboardColumnDOM columnNumber="2" player={this.props.player} />
        <GameboardColumnDOM columnNumber="3" player={this.props.player} />
        <GameboardColumnDOM columnNumber="4" player={this.props.player} />
        <GameboardColumnDOM columnNumber="5" player={this.props.player} />
        <GameboardColumnDOM columnNumber="6" player={this.props.player} />
        <GameboardColumnDOM columnNumber="7" player={this.props.player} />
        <GameboardColumnDOM columnNumber="8" player={this.props.player} />
        <GameboardColumnDOM columnNumber="9" player={this.props.player} />
      </div>
    );
  }
}

export default GameboardDOM;