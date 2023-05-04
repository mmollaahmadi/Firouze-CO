import { GlobalContext } from "@/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useContext } from "react";
export default function SearchInput() {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div className="relative w-full flex items-center">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`absolute left-0 rounded-md ml-4 items-center \
        ${colorMode === "light" ? "text-SuperDarkBlue" : "text-White"}`}
      />
      <input
        aria-label={"search"}
        placeholder={"Search for a country ..."}
        className={`shadow-md rounded-md my-2 outline-none min-w-[35%] w-full px-6 py-2 text-center text-sm \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue placeholder:text-SuperDarkBlue"
            : "bg-DarkBlue text-White placeholder:text-White"
        }`}
        style={{
          direction: "ltr",
        }}
        defaultValue=""
      />
    </div>
  );
}
