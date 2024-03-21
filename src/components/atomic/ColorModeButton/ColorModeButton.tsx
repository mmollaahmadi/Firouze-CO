import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "@/context";

export default function ColorModeButton() {
  const { colorMode, setColorMode } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
      className={`outline-none bg-transparent text-small`}
      style={{ color: colorMode === "light" ? "black" : "white" }}
    >
      {
        colorMode === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            className={`text-small mx-2`}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className={`text-small mx-2`}
          />
        )
      }
    </button>
  );
}
