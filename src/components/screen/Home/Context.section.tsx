import { GlobalContext } from "@/context";
import useLanguage from "@/logic/client/useLanguage";
import React, { useContext, useEffect, useState } from "react";

export default function ContextSection() {
  const { colorMode, language } = useContext(GlobalContext);
  const { getContext } = useLanguage();
  const context = getContext(language);

  return (
    <div
      style={{ color: colorMode === "light" ? "black" : "white" }}
      className="text-center"
    >
      <strong>{context?.title}</strong>
      <div
        style={{
          direction: language === "fa" ? "rtl" : "ltr",
        }}
        className={`grid grid-cols-1 grid-rows-1 px-16 py-4 text-justify`}
      >
        {context?.context}
      </div>
    </div>
  );
}
