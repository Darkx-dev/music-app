"use client"
import React from "react";
import Song from "./Song";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Player from "./Player";

export default function SearchedSongs({ searchQuery, data }: any) {
  const results = data.results;
  const [toggle, setToggle] = useState(false)
  const [songId, setSongId] = useState("")
  const testing = () => {
    console.log(data);
  };
  const togglePlayer = (id: string, e: MouseEvent) => {
    setSongId(id)
    setToggle(!toggle);
    console.log(e.target)
    console.log(toggle);
  };

  const minimizePlayer = () => {

  }
  return (
    <div className="searched__songs__wrapper z-0 relative h-[80vh] overflow-hidden overflow-y-scroll">
      <h2 onClick={testing}>
        for &quot;{searchQuery}&quot;{"(" + data.total + ")"}
      </h2>
      <div className="songs__wrapper grid grid-flow-row gap-5 mt-5">
        
        {results?.map((song: any) => {
          return (
            // <Link key={song?.id} href={`/song/${song?.id}`}>
            <div key={song?.id} onClick={(e) => togglePlayer(song?.id,e)}>
            <Song
              key={song?.id}
              title={song?.name}
              artist={song?.artists.primary[0].name}
              cover={song?.image[1].url}
              id={song?.id}
            />
            </div>
            // </Link>
          );
        })}
      </div>
      {toggle && songId && <motion.div initial={{y: 1000}} animate={{y: 0}} transition={{duration: 0.5}} className="fixed top-0 left-0 bottom-0 right-0 z-[9999] bg-[#0A091E]">
        <Player id={songId} settoggle={setToggle}/>
        </motion.div>}
    </div>
  );
}
