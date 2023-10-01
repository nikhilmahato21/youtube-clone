import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const Livechat = () => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("Api polling");
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className=" w-full h-[500px] ml-2 p-2 border border-black">
      <ChatMessage name="nikhil" message="yo sangeeta!" />
    </div>
  );
};

export default Livechat;
