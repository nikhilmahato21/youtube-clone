import React from "react";
import userIcon from "../images/user.png";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  items-center p-2 shadow-sm">
      <img className="w-6" src={userIcon} alt="user" />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
