import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A091E] p-4">
      <Navbar />
      <div className="flex mt-5">
        <h1 className="text-white text-2xl leading-tight text-nowrap font-semibold">
          Listen The <br /> Latest Musics
        </h1>
        <div className="search__wrapper flex items-center pl-8">
          <div className="search__icon">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                stroke="#8E8E8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 15.75L12.4875 12.4875"
                stroke="#8E8E8E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="text"
            className="search__input w-full bg-transparent text-sm outline-none rounded-full :border-2 px-3 py-1 text-white border-[#ffffff74]"
            placeholder="Search Music"
          />
        </div>
      </div>
      <div className="recently__played">
        <h1 className="text-xl text-white font-normal">Recently Played</h1>
      </div>
    </main>
  );
}
