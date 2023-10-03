import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateName } from "../utils/helper";

const Livechat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
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
    }, 3000);

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
      <form
        className=" w-full p-2 ml-2  bg-slate-200 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({ name: "nik", message: LiveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 h-9 bg-slate-50 border border-black rounded-lg"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="  align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mx-1  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </>
  );
};

export default Livechat;
