import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function Loading() {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div
      className={`m-auto flex h-8 w-8 animate-spin rounded-full \
        border-4 border-solid border-current border-r-transparent \
        align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] \
        ${colorMode === "light" ? "text-DarkBlue/50" : "text-White/50"}`}
      role="status"
    ></div>
  );
}
