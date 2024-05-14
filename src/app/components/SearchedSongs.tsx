"use client";
import React from "react";
import Song from "./Song";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Player from "./Player";

export default function SearchedSongs({
  searchQuery,
  data,
  minimizePlayer,
  togglePlayer,
  toggle,
}: any) {
  const results = data.results;
  return (
    <div className={`searched__songs__wrapper z-0 relative pb-2 w-full`}>
      <h2>
        for &quot;
        <span className="text-yellow-400 px-1">{searchQuery}</span>
        &quot;
        {"("}
        <span className="text-white">{data.total}</span>
        {")"}
      </h2>
      <div className="songs__wrapper grid space-y-5 h-min w-full">
        {results?.map((song: any) => {
          return (
            // <Link key={song?.id} href={`/song/${song?.id}`}>
            // <div className="song__wrapper" key={song?.id} onClick={(e) => togglePlayer(song?.id, e)} id="song-wrapper">
            <Song
              key={song?.id}
              togglePlayer={togglePlayer}
              id={song?.id}
              title={song?.name}
              artist={song?.artists.primary[0]?.name}
              cover={song?.image[1].url}
            />
            // </div>
            // </Link>
          );
        })}
      </div>
    </div>
  );
}
