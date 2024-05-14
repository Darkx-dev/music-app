/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState, useEffect } from "react";
import { formatTime, formatPercentage } from "@/utils/TimeFormatter";
import { getSongById } from "@/utils/Songs";

export default function MinimizedPlayer({ id }: any) {
  const audio: any = useRef(null);
  const intervalRef: any = useRef(null);
  const progressBar: any = useRef(null);
  const [duration, setDuration]: any = useState(0);
  const [currentTime, setCurrentTime]: any = useState("0:00");
  const [isPaused, setIsPaused] = useState(true);
  const [song, setSong]: any = useState(null);

  let songId = id;

  const getSongData = async (id: string) => {
    let currentSong = await getSongById(id);
    await setSong(currentSong);
    await setDuration(formatTime(currentSong.duration));
  };

  const handlePlayPause = async () => {
    setIsPaused(!isPaused);
    let player: any = audio?.current;
    let playerCurrentTime = formatTime(player?.currentTime.toFixed(0));

    if (isPaused) {
      player.play();
      setCurrentTime(playerCurrentTime);
      startInterval();
      return;
    }
    player.pause();
    stopInterval();
  };
  const startInterval = () => {
    if (intervalRef.current !== null) return; // Interval already running
    intervalRef.current = setInterval(() => {
      if (currentTime == duration) {
        stopInterval();
        audio?.current?.pause();
      }
      let progressPercentage = formatPercentage(
        audio?.current.currentTime,
        song.duration
      );
      setCurrentTime(formatTime(audio?.current.currentTime.toFixed(0)));
      progressBar.current.style.width = progressPercentage + "%";

      // console.log(progressPercentage)
    }, 1000); // Update every second
  };
  const stopInterval = () => {
    clearInterval(intervalRef.current);
    setIsPaused(!isPaused);
    intervalRef.current = null;
    handleNextSong();
  };
  const handlePreviousSong = () => {};
  const handleNextSong = () => {};
  useEffect(() => {
    getSongData(songId);
    console.log(1);
  }, [songId]);
  return (
    <div className="mini__player w-full flex flex-nowrap items-center gap-2 py-2 rounded-md">
      <div className="song__cover">
        <img
          src={song?.image[1]?.url}
          alt="song cover"
          className=" w-[80px] rounded-lg object-cover object-center"
        />
      </div>
      <div className="player__main w-full">
        <div className="progress__wrapper">
          <div className="progress__bar w-full bg-[#ffffff] rounded-full overflow-hidden h-[4px]">
            <audio
              hidden
              src={song?.downloadUrl[3]?.url}
              controls
              ref={audio}
            ></audio>
            <div
              className={`progress__bar__fill bg-[#6156E2] h-full w-min transition-transform`}
              ref={progressBar}
            ></div>
          </div>
          <div className="audio__timings flex justify-between">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>
        </div>
        <div className="player__controls flex flex-nowrap justify-evenly gap-4">
          <div
            className="bg-white p-2 rounded-full back"
            onClick={handlePreviousSong}
          >
            <div className="back__icon rotate-180">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.60439 4.23093C4.94586 3.73136 4 4.20105 4 5.02762V18.9724C4 19.799 4.94586 20.2686 5.60439 19.7691L14.7952 12.7967C15.3227 12.3965 15.3227 11.6035 14.7952 11.2033L5.60439 4.23093ZM2 5.02762C2 2.54789 4.83758 1.13883 6.81316 2.63755L16.004 9.60993C17.5865 10.8104 17.5865 13.1896 16.004 14.3901L6.81316 21.3625C4.83758 22.8612 2 21.4521 2 18.9724V5.02762Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
          </div>
          <div
            className="bg-[#6156E2] p-2 rounded-full pause__play flex justify-center items-center"
            onClick={handlePlayPause}
          >
            <div className="pause__play__icon grid w-fit">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="bg-white p-2 rounded-full next"
            onClick={handleNextSong}
          >
            <div className="next__icon">
              <svg
                width="15px"
                height="15px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.60439 4.23093C4.94586 3.73136 4 4.20105 4 5.02762V18.9724C4 19.799 4.94586 20.2686 5.60439 19.7691L14.7952 12.7967C15.3227 12.3965 15.3227 11.6035 14.7952 11.2033L5.60439 4.23093ZM2 5.02762C2 2.54789 4.83758 1.13883 6.81316 2.63755L16.004 9.60993C17.5865 10.8104 17.5865 13.1896 16.004 14.3901L6.81316 21.3625C4.83758 22.8612 2 21.4521 2 18.9724V5.02762Z"
                  fill="#0F0F0F"
                />
                <path
                  d="M20 3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V3Z"
                  fill="#0F0F0F"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
