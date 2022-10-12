import React, { Component } from "react";

class DisplayController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusMessage: "Click Start Game To Begin!",
    };

    this.setMessage = this.setStatusMessage.bind(this);
  }

  setStatusMessage(newMessage) {
    this.setState({
      statusMessage: newMessage,
    });
  }

  render() {
    return <h2 id="statusMessage">{this.state.statusMessage}</h2>;
  }
}

export default DisplayController;
