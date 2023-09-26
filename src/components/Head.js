import React from "react";
import ham from "../images/hamburger.svg";
import yt from "../images/yt.svg";
import user from "../images/user.png";
import search from "../images/search.svg";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 my-2 shadow-lg ">
      <div className="flex col-span-1">
        <img className="h-8" alt="menu" src={ham} />
        <img className="h-7" alt="yt" src={yt} />
      </div>
      <div className="col-span-10 text-center">
        <input
          className=" w-1/2 p-2 border border-gray-400 rounded-s-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-e-full text-center bg-gray-100">
          search
        </button>
      </div>
      <div>
        <img className="h-8 col-span-1" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Head;
