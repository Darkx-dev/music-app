"use client";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import Recent from "./components/Recent";
import Song from "./components/Song";
import SearchedSongs from "./components/SearchedSongs";
import { getSong } from "@/utils/Search";
import { useState } from "react";
import { motion } from "framer-motion";
import Player from "./components/Player";

export default function Page() {
  const [inputValue, setInputValue] = useState(null);
  const [data, setData]: any = useState([null]);

  // Debounce function
  const debounce = (func: Function, delay: number) => {
    let timeoutId: any;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handle input change
  const handleSongSearch = debounce(async (value: any) => {
    if (!value) return setInputValue(null);
    let query = value.split(" ").join("+");
    setInputValue(value);
    try {
      const data = await getSong(query);
      setData(data?.data);
    } catch (error) {}
  }, 1000);

  return (
    <main className="min-h-screen text-white px-5 pt-5">
      <Navbar />
      <div className="flex items-center gap-8 mt-5">
        <h1 className="text-[26px] leading-tight text-nowrap">
          {!inputValue && (
            <span>
              Listen The <br />
              Latest Music
            </span>
          )}
          {inputValue && <span>Search Results</span>}
        </h1>
        <div className="search__wrapper flex flex-nowrap items-center ">
          <div className="search__icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                stroke="#8E8E8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 15.75L12.4875 12.4875"
                stroke="#8E8E8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search"
            name="searchQuery"
            onChange={(e) => handleSongSearch(e.target.value)}
            className="search__input w-full placeholder:text-[#8E8E8E] bg-transparent outline-none pl-3 py-1 rounded-full text-sm"
            placeholder="Search Music"
          ></input>
        </div>
      </div>
      {!inputValue && (
        <div className="recents__wrapper mt-10">
          <h2 className="recents__title text-[22px]">Recently Played</h2>
          <div className="recents__ mt-4 flex flex-nowrap justify-between overflow-y-hidden overflow-x-scroll">
            <Recent />
            <Recent />
            <Recent />
          </div>
        </div>
      )}
      {!inputValue && (
        <div className="recommended mt-5">
          <h2 className="recommended-heading text-[18px]">Recommend for you</h2>
          <div className="recommended__songs grid grid-flow-row gap-3 mt-3">
            <Song />
            <Song />
            <Song />
          </div>
        </div>
      )}

      {!inputValue && <Navigator />}
      {inputValue && <SearchedSongs searchQuery={inputValue} data={data} />}
      
    </main>
  );
}
