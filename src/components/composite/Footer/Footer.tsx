import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";

export default function Footer() {
  const { colorMode } = useContext(GlobalContext);

  return (
    <footer
      className={`bg-gray-800 text-white py-4 border-t-[1px] border-opacity-50 mx-16 mt-40 ${
        colorMode === "light" ? "border-SuperDarkBlue" : "border-White"
      }`}
    >
      <div
        className={`container mx-auto text-center ${
          colorMode === "light" ? "text-SuperDarkBlue" : "text-White"
        }`}
      >
        <p
          style={{ direction: "ltr", fontFamily: "sans-serif" }}
          className="flex items-center justify-center"
        >
          &copy; 2024{" "}
          <a
            className="underline underline-offset-4 flex items-center mx-1"
            href={"https://xrbax.com/"}
          >
            <Image
              src={"/images/logo-xrbax.jpg"}
              alt={""}
              width={30}
              height={30}
              className="rounded-t-md"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
            XRBax
          </a>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
