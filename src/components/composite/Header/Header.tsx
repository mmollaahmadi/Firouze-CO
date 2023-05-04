import ColorModeButton from "@/components/atomic/ColorModeButton";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function Header() {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div
      className={`flex flex-row justify-between items-center shadow-md p-6 sm:py-4 sm:px-14 ${
        colorMode === "light" ? "bg-White" : "bg-DarkBlue"
      }`}
    >
      <h2
        className={`font-bold ${
          colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
        }`}
      >
        Where in the world?
      </h2>
      <ColorModeButton />
    </div>
  );
}
