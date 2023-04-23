import React, { createContext, useState } from "react";

export const darkCtx = createContext(null);

export default function Store(props) {
  const [dark, setDark] = useState(true);
  return (
    <darkCtx.Provider value={{ dark, setDark }} >{props.children}</darkCtx.Provider>
  );
}


