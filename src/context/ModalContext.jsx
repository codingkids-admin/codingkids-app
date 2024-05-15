"use client";

import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [data, setData] = useState();
  const updateData = (val) => setData(val);

  return (
    <ModalContext.Provider value={{ data, updateData }}>{children}</ModalContext.Provider>
  );
};
