import Button from "@/components/atomic/Button";
import Image from "next/image";
import React from "react";
import { countries } from "../Home/Data";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CountryInformationSection from "@/components/composite/CountryInformationSection";

export default function Detail({ cca3 }: { cca3: any }) {
  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <div className="flex flex-row w-full justify-start items-center my-6">
        <Button label={"Back"} icon={faArrowLeft} className="mx-0" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-1">
        <div className="col-span-1 col-row-1 my-auto">
          <Image
            alt={"flag"}
            src={countries[2]?.flags.svg}
            width={100}
            height={100}
            className="w-full"
          />
        </div>
        <CountryInformationSection data={countries[2]} withDetail={true} />
      </div>
    </div>
  );
}
