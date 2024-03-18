import { GlobalContext } from "@/context";
import React, { useContext } from "react";

export default function Footer() {
  const { colorMode } = useContext(GlobalContext);

  return (
    <footer
    className={`bg-gray-800 text-white py-4 border-t-[1px] border-opacity-50 mx-16 mt-40 ${
      colorMode === "light" ? "border-SuperDarkBlue" : "border-White"
    }`}>
      <div
        className={`container mx-auto text-center ${
          colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
        }`}
      >
        <p>&copy; 2024 <a className="underline underline-offset-4" href={"https://xrbax.com/"}>XRBAX</a> All rights reserved.</p>
      </div>
    </footer>
  );
}
