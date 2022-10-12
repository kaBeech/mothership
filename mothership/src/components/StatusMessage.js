import React, { Component } from "react";

class StatusMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Click Start Game To Begin!",
    };

    this.setMessage = this.setMessage.bind(this);
  }

  setMessage(newMessage) {
    this.setState({
      message: newMessage,
    });
  }

  render() {
    return <h2 id="statusMessage">{this.state.message}</h2>;
  }
}

export default StatusMessage;
