import { darkCtx } from "@/utils/store";
import React, { useContext } from "react";

export default function About() {
  // check Darkness
  const isDark = useContext(darkCtx).dark;
  return (
    <div className=" w-full min-h-screen flex flex-col items-center space-y-8 justify-start ">
      <div className=" flex items-center h-20">
        <hr
          className={` border-none tra w-8 h-1 ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
        <h1
          className={` text-3xl font-sans font-bold p-4 tra ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          ABOUT ME
        </h1>
        <hr
          className={`tra border-none  w-8 h-1 ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
      </div>

      {/* About */}

      <div
        className={`tra flex flex-col text-md md:text-xl space-y-2 ${
          isDark ? "text-white" : "text-neutral-800"
        } `}
      >
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2>Name </h2>
          <h2 className=" font-bold">Abdullah Ayman</h2>
        </div>
        <div className=" flex space-x-2 md:space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2>Age</h2>
          <h2 className=" font-bold">21</h2>
        </div>
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2> Nationality </h2>
          <h2 className=" font-bold">Egyption</h2>
        </div>
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2> FreeLance </h2>
          <h2 className=" font-bold">Available</h2>
        </div>
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2> Languages </h2>
          <h2 className=" font-bold">Arabic & English</h2>
        </div>
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2> Phone </h2>
          <h2 className=" font-bold">+201015737609</h2>
        </div>
        <div className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300">
          <h2> Email </h2>
          <h2 className=" font-bold">abdullahayman40474@gmail.com</h2>
        </div>
      </div>
      <hr className="w-full border-gray-500" />
      
      {/* Skills */}
      <div className=" w-full p-2 flex flex-col items-center justify-center space-y-6 ">
        <h1
          className={` text-3xl font-sans font-bold text- center tra ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          Skills
        </h1>
        <div className=" w-full flex flex-row flex-wrap space-y-4 justify-center items-center ">
          
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            HTML
          </h1>
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            CSS
          </h1>
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            JavaScript
          </h1>
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            ReactJs
          </h1>
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            NextJs
          </h1>
          <h1 className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${isDark ? ' shadow-green-300 border-green-300 text-green-300' : 'shadow-neutral-800 border-neutral-800 text-neutral-800'} tra`}>
            Tailwind
          </h1>
        </div>
      </div>
    </div>
  );
}
