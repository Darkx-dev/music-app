/* eslint-disable @next/next/no-img-element */
"use client";
import Player from "./Player";
import { useState } from "react";
// import { motion } from "framer-motion";
export default function Song({ title, artist, cover, id, togglePlayer }: any) {
  // const [toggle, setToggle] = useState(false);
  const trimString = (str: string, maxLength: number) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };
  const setRecents = () => {
    let bessMusicRecents = localStorage.getItem("bessMusicRecents")?.split("#") || [];
    setTimeout(() => {
      if (bessMusicRecents.indexOf(id) == -1) {
        if (bessMusicRecents.length > 4) {
          bessMusicRecents.pop();
        }
        bessMusicRecents = [id, ...bessMusicRecents];
        localStorage.setItem("bessMusicRecents", bessMusicRecents.join("#"));
      }
    }, 1000);
  };

  return (
    <div
      className="song__card flex flex-nowrap items-center"
      onClick={(e) => {
        togglePlayer(id, e);
        setRecents();
      }}
    >
      <div className="song__image w-20 overflow-hidden rounded-2xl">
        <img
          src={
            cover
              ? cover
              : "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGs2bmFrNnJhNjdpZjJkeGNqeXdtdmY1czQzY3Rnbm9raWdoZTBjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5SzrnYJissgypId4W9/giphy.gif"
          }
          alt="Song Preview"
          className="object-center object-cover w-full h-full"
        />
      </div>
      <div className="song__info px-5 font-light flex flex-col justify-evenly py-3 h-full">
        <h1 className="song__title text-base font-normal">
          {title ? trimString(title, 20) : "Racism is bad guys"}
        </h1>
        <p className="song__artist text-xs text-[#DEDEDE]">
          {artist ? trimString(artist, 20) : "no racism"}
        </p>
        <p className="song__views text-xs text[#DEDEDE]">
          <span className="song__views__cound">114k</span>/ streams
        </p>
      </div>
    </div>
  );
}
