"use client";
import Image from "next/image";
import { useState } from "react";
import darkBgImage from "@/assets/images/bg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSubmit = async () => {
    if (user.username == "" || user.password == "") {
      return toast("Can't be blank", {
        type: "error",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    try {
      const response = await toast.promise(axios.post("/api/register", user), {
        pending: "Regestering...",
        success: "Registered Successfully",
        error: "Wrong username or password",
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="bg-[rgb(42,39,39)] text-white relative z-0 h-screen">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={4}
      />
      <Image
        src={darkBgImage}
        className="absolute z-10 h-full w-full object-auto object-top"
        alt="bro"
      />

      <div className="hero__wrapper flex items-center pb-20 h-full w-full top-0 left-0 z-50 absolute p-8">
        <div className="hero__main w-full flex flex-col items-center">
          <div className="hero__moto self-start">
            {/* <h1 className="text-3xl font-bold">
              Dancing between <br /> The shadows <br /> Of rhythm{" "}
            </h1> */}
          </div>
          <div className="links__wrapper flex flex-col items-center gap-3 text-xl leading-tight font-semibold text-white text-center mt-6">
            {/* <a
              href="/signup"
              className="bg-[#FF2E00] rounded-[18px] w-[70vw] py-2 cursor-pointer"
            >
              Get started
            </a> */}
            <label className=" tracking-wider self-start" htmlFor="username">
              Username
            </label>
            <input
              className="rounded-[20px] py-2 px-4 w-[75vw] bg-[#00000095] border-2 border-[#FF2E00] outline-none placeholder:text-[#ffffff95] placeholder:font-extralight"
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={user.username || ""}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
            <label className=" tracking-wider self-start" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-[20px] py-2 px-4 w-[75vw] bg-[#00000095] border-2 border-[#FF2E00] outline-none placeholder:text-[#ffffff95] placeholder:font-extralight"
              type="text"
              name="password"
              id="password"
              placeholder="password"
              value={user.password || ""}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <label className=" tracking-wider self-start" htmlFor="password">
              Email
            </label>
            <input
              className="rounded-[20px] py-2 px-4 w-[75vw] bg-[#00000095] border-2 border-[#FF2E00] outline-none placeholder:text-[#ffffff95] placeholder:font-extralight"
              type="text"
              name="email"
              id="email"
              placeholder="email"
              value={user.email || ""}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
            <button
              className="bg-[#FF2E00] tracking-wider rounded-[18px] w-[75vw] py-2 cursor-pointer"
              type="submit"
              onClick={handleSubmit}
            >
              Sign up
            </button>
            {/* <a
              href="/login"
              className="border-2 border-[#FF2E00] text-[#FF2E00] rounded-[18px] w-[70vw] py-2 cursor-pointer"
            >
              Continue with Email
            </a> */}
             <Link
              href={"/login"}
              className="bg-[#00000050] text-yellow-400 tracking-wider rounded-[18px] px-5 py-2 cursor-pointer text-sm font-normal"
            >
              Log in?
            </Link>
          </div>
          <p className="terms text-center w-[72%] text-sm text-[#CBC8C8] mt-5">
            by continuing you agree to terms of services and Privacy policy
          </p>
        </div>
      </div>
    </main>
  );
}
