import Image from "next/image";
import React from "react";
import cover1 from '@/assets/images/cover1.png'
import Link from "next/link";

export default function page() {
  return (
    <main className="min-h-screen text-white p-4" id="song__page">
      <nav className="song__nav flex justify-between items-center flex-nowrap">
        <Link href='/'>
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
            <h1>Ophelia by Steven</h1>
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
        <Image src={cover1} alt="song cover" height={300} width={300} priority className="h-full w-full rounded-3xl"/>
      </div>
      <div className="song__info text-center mt-2">
        <h1 className="song__title text-2xl">Ophelia</h1>
        <p className="song__artist text-base text-[#868686] mt-1">Steven Price</p>
      </div>
    </main>
  );
}
