import { darkCtx } from "@/utils/store";
import React, { useContext } from "react";

export default function Contact() {
  // dark
  const isDark = useContext(darkCtx).dark;

  // contact
  const conatct = [
    {
      ques: "Phone",
      ans: "+201015737609",
    },
    {
      ques: "Email",
      ans: "abdullahayman40474@gmail.com",
    },
  ];

  const showCon = conatct.map((e, index) => (
    <div
      key={index}
      className=" flex space-x-4 border-l-2 px-2 font-sans border-green-300"
    >
      <h2>{e.ques} </h2>
      <h2 className=" font-bold">{e.ans}</h2>
    </div>
  ));

  //Links
  const links = [
    {
      link: "https://www.linkedin.com/in/aabdullah-ayyman/",
      ico: "fa-brands fa-linkedin",
    },
    {
      link: "https://wa.me/201015737609",
      ico: "fa-brands fa-whatsapp",
    },
    {
      link: "https://t.me/Abdullah_Ayman",
      ico: "fa-brands fa-telegram",
    },
    {
      link: "https://twitter.com/Aybbekk",
      ico: "fa-brands fa-twitter",
    },
    {
      link: "https://www.facebook.com/Abdullah.Ayman.Yehya/",
      ico: "fa-brands fa-facebook",
    },
    
  ];

  const showLinks = links.map((e, index) => (
    <a
      target="_blank"
      href={e.link}
      key={index}
      className={`font-sans text-3xl mx-4 cursor-pointer  border-2  h-20 w-20 text-center shadow-md py-5 rounded-full ${
        isDark
          ? " shadow-green-300 border-green-300 text-green-300"
          : "shadow-neutral-800 border-neutral-800 text-neutral-800"
      } tra`}
    >
      <i className={e.ico}></i>
    </a>
  ));
  return (
    <div className=" min-h-screen flex flex-col items-center justify-start space-y-8">
      <div className=" flex items-center h-20">
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
          CONTACT WITH ME
        </h1>
        <hr
          className={`tra border-none rounded-full  w-8 h-1 ${
            isDark ? "bg-white" : "bg-neutral-800"
          } `}
        />
      </div>

      <div
        className={` py-28 flex flex-col space-y-4 tra text-xl  ${
          isDark ? "text-white" : "text-neutral-800"
        }`}
      >
        {showCon}
      </div>
      <div className=" w-full flex flex-row flex-wrap space-y-4 justify-center items-end ">
        {showLinks}
      </div>
    </div>
  );
}
