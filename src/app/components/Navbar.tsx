import Image from "next/image";
import pfp from "@/assets/images/profile.png";

export default function Navbar() {
  return (
    <nav>
      <div className="user__wrapper flex justify-between items-center">
        <div className="user flex items-center gap-3">
          <div className="user__pfp">
            <Image src={pfp} height="40" width="40" alt="user pfp" />
          </div>
          <div className="user__info">
            <h1 className="username text-lg text-white">Sarwar Jahan</h1>
            <h3 className="user__subscription text-sm text-[#DEDEDE]">
              Premium
            </h3>
          </div>
        </div>
        <div className="notification__wrapper">
          <div className="notification">
            <svg
              width="22"
              height="25"
              viewBox="0 0 22 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 0C15.2518 0 18.6985 3.52481 18.6985 7.87289C18.6985 11.0352 19.2405 13.4401 20.1355 15.1973C20.4434 15.8017 20.7713 16.2832 21.0979 16.655L21.1908 16.758L21.3507 16.9215C21.3743 16.9441 21.3961 16.9644 21.4161 16.9824L21.5259 17.0717C22.3749 17.6752 22.008 19.0076 21.0243 19.1132L20.8981 19.1199H1.10182C0.0572017 19.1199 -0.378385 17.7898 0.389472 17.1373L0.516486 17.0407L0.603714 16.9644L0.736848 16.8338C0.762564 16.8073 0.789969 16.7785 0.818952 16.7472C1.1409 16.3997 1.47119 15.938 1.78601 15.3478C2.67925 13.6731 3.24298 11.3776 3.29713 8.35602L3.30141 7.87289C3.30141 3.52481 6.74818 0 11 0ZM12.9026 21.3693C13.7503 21.3693 14.2793 22.3085 13.854 23.0583C13.2637 24.0989 12.1763 24.7394 11 24.7394C9.82365 24.7394 8.73628 24.0989 8.14603 23.0583C7.74198 22.346 8.19921 21.4627 8.97268 21.3762L9.09735 21.3693H12.9026ZM5.50608 7.62893C5.63098 4.63633 8.0429 2.24938 11 2.24938C14.037 2.24938 16.499 4.7671 16.499 7.87287C16.499 11.3871 17.1212 14.1486 18.1847 16.2365L18.3559 16.5597L18.4436 16.7156L18.5347 16.8705H3.46418L3.56501 16.7011L3.71702 16.4249C4.83888 14.3216 5.501 11.5003 5.501 7.87287L5.50608 7.62893Z"
                fill="#8E8E8E"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
