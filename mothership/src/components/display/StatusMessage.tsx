import React, { Component } from "react";

interface StatusMessageProps {}
interface StatusMessageState {
  message: string;
}

class StatusMessage extends Component<StatusMessageProps, StatusMessageState> {
  constructor(props: StatusMessageProps) {
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
