"use client";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import Recent from "./components/Recent";
import SearchedSongs from "./components/SearchedSongs";
import { getSong } from "@/utils/Search";
import { useState, useEffect } from "react";
import MinimizedPlayer from "./components/MinimizedPlayer";
import axios from "axios";
import { motion } from "framer-motion";

export default function Page() {
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [inputValue, setInputValue] = useState(null);
  const [data, setData]: any = useState([null]);
  const [toggle, setToggle] = useState(false);
  const [songId, setSongId] = useState("");
  const [bessMusicRecents, setBessMusicRecents]: any = useState([]);

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

  const togglePlayer = (id: string, e: any) => {
    setSongId(id);
    setToggle(true);
  };

  const minimizePlayer = () => {};

  const getUserData = async () => {
    const response = await axios.get("/api/getuser");
    const data = await response.data;
    console.log(data);
    setUser({ username: data.username, email: data.email });
  };

  useEffect(() => {
    let recents = localStorage.getItem("bessMusicRecents")?.split("#") || [];
    setBessMusicRecents([...recents]);
    getUserData();
  }, []);

  return (
    <motion.main
      initial={{ filter: "blur(50px)" }}
      animate={{ filter: "blur(0px)" }}
      className={`h-screen text-white flex flex-col justify-center`}
      id="main"
    >
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="navbar__wrapper h-fit w-full backdrop-contrast-75 z-[9999999]">
          <Navbar user={user} />
        </div>
        <div className=" flex items-center relative z-0 justify-between gap-8 mt-5 pl-5 w-full self-start">
          <h1 className="text-[26px] text-[#FF2E00] font-semibold leading-tight text-nowrap">
            {!inputValue && (
              <span className="">
                Listen The <br />
                Latest Music
              </span>
            )}
            {inputValue && <span>Results</span>}
          </h1>
          <div className="search__wrapper z-0 flex flex-nowrap items-center rounded-l-full backdrop-blur-sm bg-[#ffffff20] pl-2 py-1">
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
      </motion.header>
      <motion.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, zIndex: -1 }}
        transition={{ duration: 0.8 }}
        className={`px-5 h-full overflow-auto scroll-hide`}
        id="home"
      >
        {!inputValue && (
          <div className="recents__wrapper mt-10">
            <h2 className="recents__title text-[22px]">Recently Played</h2>
            <div className="recents__ mt-4 flex h-fit flex-nowrap overflow-y-hidden overflow-x-auto scroll-hide snap-x gap-3 snap-mandatory">
              {bessMusicRecents.map((recent: any, index: number) => (
                <Recent
                  key={recent}
                  id={recent}
                  index={index}
                  togglePlayer={togglePlayer}
                />
              ))}
            </div>
          </div>
        )}
        {!inputValue && (
          <div className="recommended mt-5">
            <h2 className="recommended-heading text-[18px] ">
              Recommend for you
            </h2>
            <div className="recommended__songs grid grid-flow-row gap-3 mt-3"></div>
          </div>
        )}

        {inputValue && (
          <SearchedSongs
            searchQuery={inputValue}
            data={data}
            setToggle={setToggle}
            togglePlayer={togglePlayer}
            minimizePlayer={minimizePlayer}
            toggle={toggle}
          />
        )}
      </motion.section>
      <div className="navigator__player__wrapper w-full bg-[#FF2E0020] rounded-t-lg justify-self-end self-end order-2">
        {toggle && (
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="player__wrapper px-2 py-2"
          >
            <MinimizedPlayer id={songId} />
          </motion.div>
        )}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="navigator__wrapper z-50 w-full pt-5 pb-3 rounded-t-lg shadow bg-[#131313] "
        >
          <Navigator activeNav="home" songId={songId} />
        </motion.div>
      </div>
    </motion.main>
  );
}
