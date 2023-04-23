import { darkCtx } from "@/utils/store";
import Link from "next/link";
import React, { useContext } from "react";

export default function Index() {
  // Checking fo dark
  const isDark = useContext(darkCtx).dark


  return (
    // Home Page
    <div className=" h-screen w-full flex justify-center items-center">
      <div className=" flex space-y-3 justify-center md:flex-row flex-col items-start space-x-3 lg:space-x-6">
        {/* Image */}
        <div className="w-fit  mx-auto">
          <img
            className="  w-60 h-60 rounded-full ring-4 ring-gray-500/50 shadow-2xl shadow-black"
            src="./p-img.jpg"
            alt="my image"
          />
        </div>

        {/* Description */}
        <div className={` min-w-sm max-w-sm font-sans  flex flex-col space-y-3 ${isDark ? " text-white " : 'text-neutral-800'}`}>
          <h3 className=" text- md:text-lg  tra">Hi , I am</h3>
          <h1 className=" text-green-400 text-2xl  md:text-4xl tra">Abdullah Ayman</h1>
          <p className=" text-md md:text-lg tra">I'm a UI devleoper based in Egypt , I makes a immersive and beautiful web application trhough carefully crafted code .</p>
        
          {/* Links */}
          <div className=" flex justify-start space-x-4">
            <a className="text-xl  hover:text-blue-400" href="https://www.linkedin.com/in/aabdullah-ayyman/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a className="text-xl  hover:text-blue-400" href="https://twitter.com/Aybbekk" target="_blank"><i class="fa-brands fa-twitter"></i></a>
            <a className="text-xl  hover:text-blue-400" href="https://www.facebook.com/Abdullah.Ayman.Yehya/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
          </div>
          <div className=" flex justify-around ">
            <Link className=" outline-none py-2 px-4 rounded-full tra border-2  border-green-400 bg-green-400 hover:bg-green-400/0 " href='/about' >More About Me</Link>
            <Link className=" outline-none py-2 px-4 rounded-full tra border-2  border-green-400 bg-green-400/0 hover:bg-green-400 " href='/portfolio'> My Portfolio</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
