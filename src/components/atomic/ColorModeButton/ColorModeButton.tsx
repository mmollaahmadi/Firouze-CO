import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regular_moon } from "@fortawesome/free-regular-svg-icons";
import { GlobalContext } from "@/context";

export default function ColorModeButton() {
  const { colorMode, setColorMode } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className={`outline-none bg-transparent ${
        colorMode === "light" ? "text-black" : "text-White"
      }  text-small`}
    >
      <FontAwesomeIcon
        icon={colorMode === "light" ? regular_moon : faMoon}
        className={`text-small mx-2`}
      />
      {`${colorMode === "light" ? "Dark" : "Light"} Mode`}
    </button>
  );
}
