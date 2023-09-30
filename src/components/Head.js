import React, { useEffect, useState } from "react";
import ham from "../images/hamburger.svg";
import yt from "../images/yt.svg";
import user from "../images/user.png";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API, search } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 my-2 shadow-lg ">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src={ham}
        />
        <img className="h-7 px-2" alt="yt" src={yt} />
      </div>
      <div className="col-span-10  relative ">
        <div>
          <input
            className=" w-[50%] p-3  border border-gray-400 rounded-s-full "
            type="text"
            placeholder="search.."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400   rounded-e-full text-center bg-gray-50 absolute  top-0 p-2">
            {
              <svg
                class="text-gray-600  h-8 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  class="heroicon-ui"
                  d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25a1 1 0 0 0 1.41-1.41l-4.25-4.25zm-6 0a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z"
                />
              </svg>
            }
          </button>
          {showSuggestions && (
            <div className=" w-[35%] mx-3 fixed shadow-lg bg-white py-3 px-5  rounded-md">
              <ul className="mx-3">
                {suggestions.map((s) => (
                  <li className="flex  py-2 hover:bg-gray-100">
                    {search}
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="text-center">
        <img className="h-8 col-span-1" alt="user" src={user} />
      </div>
    </div>
  );
};

export default Head;
