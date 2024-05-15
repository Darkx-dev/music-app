/* eslint-disable @next/next/no-img-element */
"use client";
import bars from "@/assets/icons/bars.svg";
import { useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import { animate, motion } from "framer-motion";

export default function Navbar({ user }: any) {
  const [isDrop, setIsDrop] = useState(false);
  const dropMenu = useRef(null);
  const handleDropDown = () => {
    setIsDrop(!isDrop);
  };
  return (
    <div className="user__wrapper w-full flex justify-between items-center px-5 pt-4 relative overflow-x-clip shadow-xl">
      <div className="user flex items-center gap-3">
        <div className="user__pfp">
          <img
            src="https://gifdb.com/images/high/profile-pic-spiderman-cartoon-side-view-4776godymhekxqz0.webp"
            height="40"
            width="40"
            alt="user pfp"
            className="rounded-full"
          />
        </div>
        <div className="user__info">
          <h1 className="username text-lg text-white h-6">{user?.username}</h1>
          <h3 className="user__subscription text-sm text-yellow-400">
            Premium
          </h3>
        </div>
      </div>
      <div className="more__wrapper">
        <div className="more">
          <Image
            src={bars}
            alt="bars"
            height={40}
            width={40}
            onClick={handleDropDown}
            className="absolute z-[9999] top-2 right-2"
          />
          <motion.div
            initial={{ x: 250 }}
            animate={
              isDrop
                ? {
                    x: 0,
                  }
                : {}
            }
            transition={{duration: 0.3}}
            className="drop__menu absolute z-[999] top-0 h-screen flex items-center justify-center w-[200px] right-0 font-bold tracking-wider bg-[#0000007d] backdrop-blur"
          >
            <div className="drop__menu__main h-[80%] px-4 w-full text-center text-[#FF2E00]">
              <div className="logout rounded-md hover:bg-black py-2">
                <a href="/api/logout">Logout</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
