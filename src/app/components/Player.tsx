/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { getSongById } from "@/utils/Songs";
import Link from "next/link";
import { formatTime, formatPercentage } from "@/utils/TimeFormatter";
import Navigator from "@/app/components/Navigator";

export default function Player({ id, settoggle }: any) {
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
    setSong(currentSong);
    setDuration(formatTime(currentSong.duration));
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
    intervalRef.current = null;
  };

  const handleNextSong = () => {};
  useEffect(() => {
    getSongData(songId);
  }, [songId, song?.duration]);
  return (
    <main className="min-h-screen text-white pb-0 px-4 pt-4" id="song__page">
      <nav className="song__nav flex justify-between items-center flex-nowrap">
        <Link
          href="/"
          onClick={() => {
            stopInterval();
            settoggle(false);
          }}
        >
          <div className="back">
            <div className="back__icon">
              <svg
                width="22"
                height="24"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.176 12H4.52002"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.848 19L4.52002 12L10.848 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div className="current__song">
          <div className="song__title__artist">
            <h1>{song.name} by {song.artists.primary[0].name.split(' ')[0]}</h1>
          </div>
        </div>
        <div className="like__current">
          <div className="like__icon">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.8393 2.61C18.3776 2.099 17.8294 1.69365 17.226 1.41708C16.6226 1.14052 15.9759 0.998175 15.3228 0.998175C14.6697 0.998175 14.0229 1.14052 13.4195 1.41708C12.8162 1.69365 12.268 2.099 11.8062 2.61L10.848 3.67L9.88975 2.61C8.9571 1.57831 7.69216 0.998709 6.37319 0.998709C5.05423 0.998709 3.78928 1.57831 2.85663 2.61C1.92398 3.64169 1.40002 5.04097 1.40002 6.5C1.40002 7.95903 1.92398 9.35831 2.85663 10.39L3.81487 11.45L10.848 19.23L17.8811 11.45L18.8393 10.39C19.3013 9.87924 19.6677 9.27281 19.9177 8.60536C20.1678 7.9379 20.2964 7.22249 20.2964 6.5C20.2964 5.77751 20.1678 5.0621 19.9177 4.39464C19.6677 3.72719 19.3013 3.12076 18.8393 2.61Z"
                fill="#8E8E8E"
                stroke="#8E8E8E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="song__cover grid place-content-center py-5">
        <img
          src={song?.image[2].url}
          alt="song cover"
          className="h-[300px] w-full rounded-3xl"
        />
      </div>
      <div className="song__info text-center mt-2">
        <h1 className="song__title text-2xl">{song?.name}</h1>
        <p className="song__artist text-base text-[#868686] mt-1">
          {song?.artists.primary[0].name}
        </p>
      </div>
      <div className="song__player flex flex-col gap-10 mt-10 mb-3">
        <audio
          hidden
          src={song?.downloadUrl[3].url}
          controls
          ref={audio}
        ></audio>
        <div className="song__bar relative bg-white h-[4px] w-full rounded-full overflow-hidden">
          <div
            className={`song__bar__fill bg-[#6156E2] h-full w-min transition-transform`}
            ref={progressBar}
          ></div>
          <span className="absolute top-1 left-0">{currentTime}</span>
          <span className="absolute top-1 right-0">{duration}</span>
        </div>
        <div className="song__player__controls flex justify-between items-center">
          <button className="shuffle">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3926 3H21.5153V8"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.09814 20L21.5153 3"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.5153 16V21H16.3926"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.3681 15L21.5153 21"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.09814 4L9.22084 9"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="back">
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0123 20L9.76691 12L20.0123 4V20Z"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.6687 19V5"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="play__pause bg-[#6156E2] p-3 rounded-full"
            onClick={handlePlayPause}
          >
            {isPaused && (
              <svg
                width="43"
                height="41"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.98773 4L16.2331 12L5.98773 20V4Z"
                  stroke="#F2F2F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}

            {!isPaused && (
              <svg
                width="43"
                height="41"
                viewBox="0 0 43 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9872 6.83331H10.9862V34.1666H17.9872V6.83331Z"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.9892 6.83331H24.9882V34.1666H31.9892V6.83331Z"
                  stroke="#F2F2F2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <button className="next" onClick={handleNextSong}>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.98773 4L16.2331 12L5.98773 20V4Z"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.3313 5V19"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="repeat">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8282 1L21.9263 5L17.8282 9"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.48462 11V9C3.48462 7.93913 3.91639 6.92172 4.68494 6.17157C5.4535 5.42143 6.49588 5 7.58278 5H21.9263"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.58278 23L3.48462 19L7.58278 15"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.9263 13V15C21.9263 16.0609 21.4946 17.0783 20.726 17.8284C19.9575 18.5786 18.9151 19 17.8282 19H3.48462"
                stroke="#F2F2F2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="navigator__wrapper fixed bottom-0 w-full left-0 px-4">
      <Navigator />
      </div>
    </main>
  );
}
