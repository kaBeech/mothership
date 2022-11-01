import React from "react";

// What we need to do is pass down the current message as a prop, from displayController/App/mothership

interface StatusMessageProps {
  message: string;
}
// interface StatusMessageState {
//   message: string;
// }

const StatusMessage = (props: StatusMessageProps) => {
  // const [message, setMessage] = useState("Click Start Game To Begin!");

  // useEffect(() => {
  // const showClickedMessageOnClick = () => {
  //   if (message !== "Status Message successfully clicked and updated!") {
  //     setMessage("Status Message successfully clicked and updated!");
  //   } else {
  //     setMessage("You clicky clicker!");
  //   }
  // };
  // document.addEventListener("click", showClickedMessageOnClick);

  // return () => {
  //   document.removeEventListener("click", showClickedMessageOnClick);
  // };

  //   setMessage(message);
  // }, [message]);

  return <h2 id="statusMessage">{props.message}</h2>;
};

// class StatusMessage extends Component<StatusMessageProps, StatusMessageState> {
//   constructor(props: StatusMessageProps) {
//     super(props);

//     this.state = {
//       message: "Click Start Game To Begin!",
//     };

//     this.setMessage = this.setMessage.bind(this);
//   }

//   render() {
//     return <h2 id="statusMessage">{this.state.message}</h2>;
//   }
// }

export default StatusMessage;
