import { darkCtx } from "@/utils/store";
import React, { useContext } from "react";

export default function Portfolio() {
  // check Darkness
  const isDark = useContext(darkCtx).dark;

  // projects
  const projects = [
    {
      link: "https://twitter-five-roan.vercel.app",
      img: "./twitter.PNG",
      name: "Twitter Clone",
      used: "React & Next & Tailwind",
    },
    {
      link: "https://e-app-indol.vercel.app",
      img: "./eapp.PNG",
      name: "E-commerce App",
      used: "React & Next & Tailwind",
    },
    {
      link: "https://react-second-project-five.vercel.app",
      img: "./1st.PNG",
      name: "Services App",
      used: "React",
    },
    {
      link: "https://react-3rd.vercel.app/",
      img: "./2nd.PNG",
      name: "React App",
      used: "React",
    },
  ];

  const showProjects = projects.map((e, index) => (
    <div
      key={index}
      className=" m-2 max-w-lg rounded-lg object-cover bg-blue-300 shadow-md shadow-blue-300 "
    >
      <a href={e.link} target="_blank">
        <img
          className=" rounded-lg w-full object-cover"
          src={e.img}
          alt="project image"
        />
      </a>
      <div className=" p-4 flex flex-col items-center text-neutral-800 text-lg font-sans ">
        <h1 className="font-bold">{e.name}</h1>
        <h1>{e.used}</h1>
        <h1>(HTML & CSS & JS)</h1>
        <a className="underline text-neutral-800" href={e.link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  ));
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start p-4 ">
      <div className=" mt-10 md:mt-0 flex items-center h-20">
        <hr
          className={` border-none tra w-8 h-1 rounded-full ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
        <h1
          className={` text-3xl font-sans font-bold p-4 tra ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          MY PORTFOLIO
        </h1>
        <hr
          className={`tra border-none rounded-full  w-8 h-1 ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
      </div>

      {/* Projects */}
      <div className=" flex flex-wrap items-center justify-center ">{showProjects}</div>
    </div>
  );
}
