import React from "react";
import Song from "./Song";
import Link from "next/link";

export default function SearchedSongs({ searchQuery, data }: any) {
  const results = data.results;
  const testing = () => {
    console.log(data);
  };
  return (
    <div className="searched__songs__wrapper">
      <h2 onClick={testing}>
        for &quot;{searchQuery}&quot;{"(" + data.total + ")"}
      </h2>
      <div className="songs__wrapper grid grid-flow-row gap-5 mt-5">
        {results?.map((song: any) => {
          return (
            <Link key={song?.id} href={`/song/${song?.id}`}>
              <Song
                title={song?.name}
                artist={song?.artists.primary[0].name}
                cover={song?.image[1].url}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
