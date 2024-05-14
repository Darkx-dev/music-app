/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState, useEffect } from "react";
import { formatTime, formatPercentage } from "@/utils/TimeFormatter";
import { getSongById } from "@/utils/Songs";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const devToast = () => {
    toast.info("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handlePreviousSong = () => {
    devToast()
  };
  const handleNextSong = () => {
    devToast()
  };
  useEffect(() => {
    getSongData(songId);
    console.log(1);
  }, [songId]);
  return (
    <div className="mini__player w-full flex flex-nowrap items-center gap-2 py-2 rounded-md">
      <div className="toasts__wrapper">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
      <div className="song__cover">
        <img
          src={song?.image[1]?.url}
          alt="song cover"
          className=" w-[100px] rounded-lg object-cover object-center"
        />
      </div>
      <div className="player__main w-full">
        <div className="progress__wrapper">
          <div className="progress__bar w-full bg-[#D9D9D9] rounded-full overflow-hidden h-[4px]">
            <audio
              hidden
              src={song?.downloadUrl[3]?.url}
              controls
              ref={audio}
            ></audio>
            <div
              className={`progress__bar__fill bg-[#E69A15] h-full w-min transition-transform`}
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
            className="rounded-full back flex items-center"
            onClick={handlePreviousSong}
          >
            <div className="back__icon rotate-180">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.91666 7.52084V17.4896C3.91666 19.5313 6.13541 20.8125 7.90625 19.7917L12.2292 17.3021L16.5521 14.8021C18.3229 13.7813 18.3229 11.2292 16.5521 10.2083L12.2292 7.70834L7.90625 5.21875C6.13541 4.19792 3.91666 5.46875 3.91666 7.52084Z"
                  fill="white"
                />
                <path
                  d="M21.0833 19.7188C20.6562 19.7188 20.3021 19.3646 20.3021 18.9375V6.0625C20.3021 5.63542 20.6562 5.28125 21.0833 5.28125C21.5104 5.28125 21.8646 5.63542 21.8646 6.0625V18.9375C21.8646 19.3646 21.5208 19.7188 21.0833 19.7188Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div
            className=" rounded-full pause__play flex justify-center items-center"
            onClick={handlePlayPause}
          >
            <div className="pause__play__icon grid w-fit">
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_719)">
                  <path
                    d="M25 50C11.1937 50 0 38.8063 0 25C0 11.1937 11.1937 0 25 0C38.8063 0 50 11.1937 50 25C50 38.8063 38.8063 50 25 50ZM18.75 12.5188V37.4813L37.5 25L18.75 12.5188Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_719">
                    <rect width="50" height="50" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div
            className="p-2 rounded-full next flex items-center"
            onClick={handleNextSong}
          >
            <div className="next__icon ">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.91666 7.52084V17.4896C3.91666 19.5313 6.13541 20.8125 7.90625 19.7917L12.2292 17.3021L16.5521 14.8021C18.3229 13.7813 18.3229 11.2292 16.5521 10.2083L12.2292 7.70834L7.90625 5.21875C6.13541 4.19792 3.91666 5.46875 3.91666 7.52084Z"
                  fill="white"
                />
                <path
                  d="M21.0833 19.7188C20.6562 19.7188 20.3021 19.3646 20.3021 18.9375V6.0625C20.3021 5.63542 20.6562 5.28125 21.0833 5.28125C21.5104 5.28125 21.8646 5.63542 21.8646 6.0625V18.9375C21.8646 19.3646 21.5208 19.7188 21.0833 19.7188Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
