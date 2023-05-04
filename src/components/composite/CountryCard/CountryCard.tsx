import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import InformationSection from "../CountryInformationSection";

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
        width={200}
        height={200}
        className="w-full max-h-44 h-44 rounded-t-md"
        style={{ objectFit: "cover" }}
      />

      <InformationSection data={data} />
    </div>
  );
}
