import React from "react";

interface StatusMessageProps {
  message: string;
}

const StatusMessage = (props: StatusMessageProps) => {
  return <h2 id="statusMessage">{props.message}</h2>;
};

export default StatusMessage;
