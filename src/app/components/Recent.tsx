/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { getSongById } from "@/utils/Songs";

export default function Recent({ id, togglePlayer }: any) {
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
    <div
      className="recent__card min-w-[30%] snap-start"
      onClick={(e) => togglePlayer(id, e)}
    >
      <div className="recent__image rounded-xl overflow-hidden">
        {data?.images && (
          <img src={data?.images[2]?.url} alt="recent" className="w-full" />
        )}
      </div>
      <p className="recent__song_title text-sm text-center font-light mt-2">
        {data?.title?.split(" ")[0]}
      </p>
    </div>
  );
}
