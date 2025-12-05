import { darkCtx } from "@/utils/store";
import Link from "next/link";
import React, { useContext } from "react";

export default function Index() {
  // Checking fo dark
  const isDark = useContext(darkCtx).dark;

  return (
    // Home Page
    <div className=" h-screen w-full flex justify-center items-center">
      <div className=" flex justify-center md:flex-row flex-col items-start space-x-3 lg:space-x-6">
        {/* Image */}
        <div className="w-fit  mx-auto">
          <img
            className="  w-60 h-60 rounded-full ring-4 ring-gray-500/50 shadow-2xl shadow-black"
            src="./p-img.jpg"
            alt="my image"
          />
        </div>

        {/* Description */}
        <div
          className={` min-w-sm max-w-sm font-sans  flex flex-col space-y-1 md:space-y-3 ${
            isDark ? " text-white " : "text-neutral-800"
          }`}
        >
          <h3 className=" text- md:text-lg  tra">Hi , I am</h3>
          <h1 className=" text-green-400 text-2xl  md:text-4xl tra">
            Abdullah Ayman
          </h1>
          <p className=" text-sm tra">
            Front-end developer with experience in building dynamic web
            applications using the React.js & Next.js frameworks. With my
            expertise in HTML, CSS, and JavaScript, I can effectively develop
            user interfaces that are visually appealing and highly functional. I
            understand React.js concepts such as state management and JSX
            syntax. My ability to work with various libraries and tools such as
            Redux and React Router enables me to easily create complex
            applications. , Also I have some knowledge about TypeScript and how
            to use it with React.js
          </p>

          {/* Links */}
          <div className=" flex justify-start space-x-4">
            <a
              className="text-xl  hover:text-blue-400"
              href="https://www.linkedin.com/in/aabdullah-ayyman/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              className="text-xl  hover:text-blue-400"
              href="https://twitter.com/Aybbekk"
              target="_blank"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              className="text-xl  hover:text-blue-400"
              href="https://www.facebook.com/Abdullah.Ayman.Yehya/"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i>
            </a>
          </div>
          <div className=" flex justify-around ">
            <Link
              className=" outline-none py-2 px-4 rounded-full tra border-2  border-green-400 bg-green-400 hover:bg-green-400/0 "
              href="/about"
            >
              {" "}
              About Me
            </Link>
            <Link
              className=" outline-none py-2 px-4 rounded-full tra border-2  border-green-400 bg-green-400/0 hover:bg-green-400 "
              href="/portfolio"
            >
              {" "}
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
