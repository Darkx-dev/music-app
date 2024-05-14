"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navigator({ activeNav, songId }: any) {
  const [currentNav, setCurrentNav] = useState(false);
  const handleSvgHover = (e: any) => {
    console.log(e.target.childNodes);
  };
  return (
    <div className="navigator z-50">
      <ul className="navigator__routes flex justify-evenly items-center">
        <div className="home__route">
          <div className="__home__icon">
            <svg
              width="22"
              height="24"
              onMouseEnter={(e) => handleSvgHover(e)}
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.19998 9L11.24 2L19.28 9V20C19.28 20.5304 19.0917 21.0391 18.7567 21.4142C18.4216 21.7893 17.9672 22 17.4933 22H4.98665C4.51279 22 4.05835 21.7893 3.72328 21.4142C3.38822 21.0391 3.19998 20.5304 3.19998 20V9Z"
                stroke={`${activeNav == "home" ? "#FF2E00" : "#ffffff"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.55998 22V12H13.92V22"
                stroke={`${activeNav == "home" ? "#FF2E00" : "#ffffff"}`}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {songId && (
          <div className="songs__route">
            <Link href={"/song/" + songId}>
              <div className="songs__icon">
                <svg
                  width="23"
                  height="23"
                  onMouseEnter={(e) => handleSvgHover(e)}
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 18.5V3.33333L22 1V16.1667"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 22C6.433 22 8 20.433 8 18.5C8 16.567 6.433 15 4.5 15C2.567 15 1 16.567 1 18.5C1 20.433 2.567 22 4.5 22Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 19.6667C20.433 19.6667 22 18.0997 22 16.1667C22 14.2337 20.433 12.6667 18.5 12.6667C16.567 12.6667 15 14.2337 15 16.1667C15 18.0997 16.567 19.6667 18.5 19.6667Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        )}
        <div className="liked__route">
          <div className="liked__icon">
            <svg
              width="22"
              height="21"
              onMouseEnter={(e) => handleSvgHover(e)}
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6171 2.60999C18.1608 2.099 17.619 1.69364 17.0228 1.41708C16.4265 1.14052 15.7874 0.998169 15.142 0.998169C14.4966 0.998169 13.8575 1.14052 13.2612 1.41708C12.665 1.69364 12.1232 2.099 11.6669 2.60999L10.72 3.66999L9.77307 2.60999C8.85142 1.5783 7.6014 0.998704 6.298 0.998704C4.9946 0.998704 3.74458 1.5783 2.82293 2.60999C1.90129 3.64169 1.38351 5.04096 1.38351 6.49999C1.38351 7.95903 1.90129 9.3583 2.82293 10.39L3.76987 11.45L10.72 19.23L17.6701 11.45L18.6171 10.39C19.0736 9.87924 19.4357 9.27281 19.6827 8.60535C19.9298 7.93789 20.057 7.22248 20.057 6.49999C20.057 5.77751 19.9298 5.0621 19.6827 4.39464C19.4357 3.72718 19.0736 3.12075 18.6171 2.60999V2.60999Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="profile__route">
          <div className="profile__icon">
            <svg
              width="22"
              height="24"
              onMouseEnter={(e) => handleSvgHover(e)}
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.7599 10C18.7599 17 10.7199 23 10.7199 23C10.7199 23 2.67993 17 2.67993 10C2.67993 7.61305 3.527 5.32387 5.03479 3.63604C6.54259 1.94821 8.58759 1 10.7199 1C12.8523 1 14.8973 1.94821 16.4051 3.63604C17.9129 5.32387 18.7599 7.61305 18.7599 10Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7199 13C12.2001 13 13.3999 11.6569 13.3999 10C13.3999 8.34315 12.2001 7 10.7199 7C9.23982 7 8.03995 8.34315 8.03995 10C8.03995 11.6569 9.23982 13 10.7199 13Z"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </ul>
    </div>
  );
}
