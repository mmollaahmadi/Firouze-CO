import ColorModeButton from "@/components/atomic/ColorModeButton";
import { GlobalContext } from "@/context";
import useLanguage from "@/logic/client/useLanguage";
import Image from "next/image";
import React, { useContext } from "react";

export default function Header() {
  const { colorMode, language, setLanguage } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);
  return (
    <div
      className={`flex flex-row justify-between items-center shadow-md p-6 sm:py-4 sm:px-14 ${
        colorMode === "light" ? "bg-White" : "bg-DarkBlue"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image
          src={"/images/logo.webp"}
          alt={""}
          width={40}
          height={40}
          className="rounded-t-md"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <h2
          className={`font-bold ${
            colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
          }`}
        >
          {context?.header_title}
        </h2>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setLanguage(language === "fa" ? "en" : "fa")}
          className={`outline-none bg-transparent text-small`}
          style={{ color: colorMode === "light" ? "black" : "white" }}
        >
          {language === "en" ? "FA" : "EN"}
        </button>
        <ColorModeButton />
      </div>
    </div>
  );
}
