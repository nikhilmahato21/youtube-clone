import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

const Livechat = () => {
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
      dispatch(
        addMessage({
          name: generateName(),
          message: "Lorem Ipsum corewa!",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-full h-[500px] ml-2 p-2 border border-black rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((c) => (
            <ChatMessage name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <div className=" w-full p-2 ml-2 border border-black">
        <input type="text" />
      </div>
    </>
  );
};

export default Livechat;
