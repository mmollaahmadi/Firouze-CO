import { createContext } from "react";

export const initialState = {
  colorMode: "light",
  setColorMode: (key: colorModeType) => {},
};
export const GlobalContext = createContext(initialState);
