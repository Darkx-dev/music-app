import React from "react";
import darkBgImage from "@/assets/images/bg.png";
import Image from "next/image";

export default function page() {
  return (
    <main className="bg-[rgb(42,39,39)] text-white relative z-0 h-screen">
      <Image
        src={darkBgImage}
        className="absolute z-10 h-full w-full object-auto object-top"
        alt="bro"
      />

      <div className="hero__wrapper flex flex-col-reverse pb-20 h-full w-full top-0 left-0 z-50 absolute p-8">
        <div className="hero__main w-full flex flex-col items-center">
          <div className="hero__moto self-start">
            <h1 className="text-3xl font-bold">
              Dancing between <br /> The shadows <br /> Of rhythm{" "}
            </h1>
          </div>
          <div className="links__wrapper flex flex-col items-center gap-4 text-xl font-bold text-[#131313] text-center mt-6">
            <a
              href="/signup"
              className="bg-[#FF2E00] rounded-[18px] w-[70vw] py-2 cursor-pointer"
            >
              Get started
            </a>
            <a
              href="/login"
              className="border-2 border-[#FF2E00] text-[#FF2E00] rounded-[18px] w-[70vw] py-2 cursor-pointer"
            >
              Continue with Email
            </a>
          </div>
          <p className="terms text-center w-[72%] text-sm text-[#CBC8C8] mt-5">
            by continuing you agree to terms of services and Privacy policy
          </p>
        </div>
      </div>
    </main>
  );
}
