/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { getSongById } from "@/utils/Songs";
import { motion } from "framer-motion";

export default function Recent({ id, togglePlayer, index }: any) {
  const [data, setData]: any = useState({
    images: [],
    title: "",
  });
  const getSongData = async (id: string) => {
    const song = await getSongById(id);
    setData({
      images: song.image,
      title: song.name,
    });
  };
  useEffect(() => {
    getSongData(id);
  }, [id]);
  return (
    <motion.div
      initial={{ x: -20, y: 0, opacity: 0 }}
      animate={{ y: 0, x: 0, opacity: 1 , transition: { delay: index* 0.2,}}}
      whileHover={{ backgroundColor: '#FF2E0020', scale: 1.01}}
      whileTap={{ backgroundColor: '#FF2E0020', scale: 1.01, transition: { duration: 0.1}}}
      whileFocus={{ backgroundColor: 'red'}}
      className="recent__card min-w-[30%] max-w-[30%] snap-start rounded-md"
      onClick={(e) => togglePlayer(id, e)}
    >
      <div className="recent__image rounded-xl w-fit">
        <motion.img
          src={data.images[2]?.url}
          alt=""
          className="w-[100px] h-[100%] rounded-xl"
        />
      </div>
      <motion.p className="recent__song_title h-4 text-sm text-center font-light mt-2">
        {data?.title?.split(" ")[0]}
      </motion.p>
    </motion.div>
  );
}
