import { darkCtx } from "@/utils/store";
import Link from "next/link";
import React, { useContext, useState } from "react";

export default function Layout(props) {
  const [show, setShow] = useState(false);

  //Check for dark
  const isDark = useContext(darkCtx).dark;
  const setisDark = useContext(darkCtx).setDark;
  return (
    <div className={`${isDark ? "bg-neutral-800" : " bg-gray-200"} tra`}>
      <div
        className={` absolute top-2 left-2 p-4 w-fit overflow-hidden  transition-all duration-700 ${
          show ? "h-48" : "h-11"
        } shadow-md  ${
          isDark ? "bg-neutral-800 shadow-green-300" : "bg-gray-200 shadow-neutral-800"
        }`}
      >
        <div>
          <div className=" flex items-center justify-between">
            <i
              onClick={() => setShow(!show)}
              className={`${
                show ? "fa-solid fa-x" : "fa-solid fa-bars"
              } text-lg cursor-pointer tra  ${
                isDark ? "text-white" : "text-neutral-800"
              }`}
            ></i>
            <div className="w-full flex justify-center items-center text-lg">
              {isDark ? (
                <i onClick={()=> setisDark(!isDark)} class="fa-solid fa-sun cursor-pointer text-yellow-500"></i>
              ) : (
                <i onClick={()=> setisDark(!isDark)} class="fa-solid cursor-pointer text-gray-800 fa-moon"></i>
              )}
            </div>
          </div>
          <div>
            <Link href="/">
              <div
                onClick={() => setShow(!show)}
                className={`flex items-center space-x-2 text-lg my-2 ${
                  isDark ? " text-white" : "text-neutral-800"
                }`}
              >
                <i className="fa-solid fa-house"></i>
                <h3>Home</h3>
              </div>
            </Link>
            <Link href="/about">
              <div
                onClick={() => setShow(!show)}
                className={`flex items-center space-x-2 text-lg my-2 ${
                  isDark ? " text-white" : "text-neutral-800"
                }`}
              >
                <i class="fa-sharp fa-regular fa-address-card"></i>
                <h3>About</h3>
              </div>
            </Link>
            <Link href="/portfolio">
              <div
                onClick={() => setShow(!show)}
                className={`flex items-center space-x-2 text-lg my-2 ${
                  isDark ? " text-white" : "text-neutral-800"
                }`}
              >
                <i class="fa-solid fa-diagram-project"></i>
                <h3>Portfolio</h3>
              </div>
            </Link>
            <Link href="/contact">
              <div
                onClick={() => setShow(!show)}
                className={`flex items-center space-x-2 text-lg my-2 ${
                  isDark ? " text-white" : "text-neutral-800"
                }`}
              >
                <i class="fa-solid fa-address-book"></i>
                <h3>Contact</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {props.children}
    </div>
  );
}
