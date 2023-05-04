import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import InformationSection from "./InformationSection";

export default function CountryCard({ data }: { data: any }) {
  const { colorMode } = useContext(GlobalContext);
  return (
    <div
      className={`col-span-1 rounded-md shadow-md \
  ${
    colorMode === "light"
      ? "bg-White text-SuperDarkBlue"
      : "bg-DarkBlue text-White"
  }`}
    >
      <Image
        src={data?.flags?.svg}
        alt={""}
        width={30}
        height={30}
        className="w-full rounded-t-md"
      />
      <InformationSection data={data} />
    </div>
  );
}
