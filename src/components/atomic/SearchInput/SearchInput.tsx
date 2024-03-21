import { GlobalContext } from "@/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useState } from "react";
import useLanguage from "@/logic/client/useLanguage";
export default function SearchInput({
  onValueChange,
  value,
}: {
  onValueChange: (value: string) => void;
  value: string;
}) {
  const { colorMode, language } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);
  function handleChange(event: any) {
    let newValue = event.target.value;
    onValueChange(newValue);
  }
  return (
    <div
      className="relative w-full flex items-center"
      style={{
        direction: language === "en" ? "ltr" : "rtl",
      }}
    >
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={`absolute ${
          language === "en" ? "left-0 ml-7" : "right-0 mr-7"
        } rounded-md  items-center \
        ${colorMode === "light" ? "text-SuperDarkBlue" : "text-White"}`}
      />
      <input
        aria-label={"search"}
        placeholder={context?.search_placeholder}
        className={`shadow-md rounded-md my-2 outline-none min-w-[35%] w-full pr-6 ${
          language === "fa" ? "ps-16" : "pl-16"
        } py-2 text-sm placeholder:text-opacity-50 \
        ${
          colorMode === "light"
            ? "bg-White text-SuperDarkBlue placeholder:text-SuperDarkBlue"
            : "bg-DarkBlue text-White placeholder:text-White"
        }`}
        style={{
          direction: language === "en" ? "ltr" : "rtl",
        }}
        value={value ?? ""}
        onChange={handleChange}
      />
    </div>
  );
}
