import { darkCtx } from "@/utils/store";
import React, { useContext } from "react";

export default function About() {
  // check Darkness
  const isDark = useContext(darkCtx).dark;

  // about
  const about = [
    {
      ques: "Name",
      ans: "Abdullah Ayman",
    },
    {
      ques: "Age",
      ans: "21",
    },
    {
      ques: "Nationality",
      ans: "Egyption",
    },
    {
      ques: "FreeLance",
      ans: "Available",
    },
    {
      ques: "Languages",
      ans: "Arabic & English",
    },
    {
      ques: "Phone",
      ans: "+201015737609",
    },
    {
      ques: "Email",
      ans: "abdullahayman40474@gmail.com",
    },
  ];

  const ShowAbout = about.map((e, index) => (
    <div
      key={index}
      className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300"
    >
      <h2>{e.ques} </h2>
      <h2 className=" font-bold">{e.ans}</h2>
    </div>
  ));

  //Skills

  const skills = [ "HTML", "CSS", "JavaScript", "ReactJs", "NextJs", "Tailwind"];
  const ShowSkills = skills.map((e, index) => (
    <h1
      key={index}
      className={`font-sans mx-4  border-2  h-20 w-20 text-center shadow-md py-6 rounded-full ${
        isDark
          ? " shadow-green-300 border-green-300 text-green-300"
          : "shadow-neutral-800 border-neutral-800 text-neutral-800"
      } tra`}
    >
      {e}
    </h1>
  ));
  return (
    <div className=" w-full min-h-screen flex flex-col items-center space-y-8 justify-start ">
      <div className=" mt-10 md:mt-0 flex items-center h-20">
        <hr
          className={` border-none tra rounded-full w-8 h-1 ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
        <h1
          className={`   text-3xl font-sans font-bold p-4 tra ${
            isDark ? "text-white" : "text-neutral-800"
          }`}
        >
          ABOUT ME
        </h1>
        <hr
          className={`tra rounded-full border-none  w-8 h-1 ${
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
        {ShowAbout}
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
        <div className=" w-full flex flex-row flex-wrap space-y-4 justify-center items-end ">
          {ShowSkills}
        </div>
      </div>
    </div>
  );
}
