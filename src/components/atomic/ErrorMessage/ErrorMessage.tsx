import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function ErrorMessage({ message }: { message: string }) {
  const { colorMode } = useContext(GlobalContext);
  return (
    <p
      className={`flex justify-center ${
        colorMode === "light" ? "text-DarkBlue" : "text-White"
      }
      `}
    >
      {message}
    </p>
  );
}
