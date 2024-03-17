import { GlobalContext } from "@/context";
import Image from "next/image";
import React, { useContext } from "react";
import InformationSection from "../CountryInformationSection";
import { useRouter } from "next/router";

export default function ProductCard({ data }: { data: any }) {
  const { colorMode } = useContext(GlobalContext);
  const router = useRouter();
  return (
    <div
      className={`col-span-1 rounded-md shadow-md hover:cursor-pointer ${
        colorMode === "light"
          ? "bg-White text-SuperDarkBlue"
          : "bg-DarkBlue text-White"
      }`}
      onClick={() => router.push(`/product/${data.id}`)}
    >
      <Image
        src={data?.image}
        alt={""}
        width={200}
        height={200}
        className="w-full max-h-44 h-44 rounded-t-md"
        style={{ objectFit: "cover" }}
        loading="lazy"
      />

      <InformationSection data={data} />
    </div>
  );
}
