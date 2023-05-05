import { GlobalContext } from "@/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useState } from "react";
export default function SearchInput({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) {
  const { colorMode } = useContext(GlobalContext);
  const [value, setValue] = useState<string>("");
  function handleChange(event: any) {
    let newValue = event.target.value;
    setValue(newValue);
    onValueChange(newValue);
  }
  return (
    <div className="relative w-full flex items-center">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`absolute left-0 rounded-md ml-7 items-center \
        ${colorMode === "light" ? "text-SuperDarkBlue" : "text-White"}`}
      />
      <input
        aria-label={"search"}
        placeholder={"Search for a country ..."}
        className={`shadow-md rounded-md my-2 outline-none min-w-[35%] w-full pr-6 pl-16 py-2 text-left text-sm placeholder:text-opacity-50 \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue placeholder:text-SuperDarkBlue"
            : "bg-DarkBlue text-White placeholder:text-White"
        }`}
        style={{
          direction: "ltr",
        }}
        value={value ?? ""}
        onChange={handleChange}
      />
    </div>
  );
}
