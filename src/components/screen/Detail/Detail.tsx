import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CountryInformationSection from "@/components/composite/CountryInformationSection";
import { useRouter } from "next/router";
import { GlobalContext } from "@/context";
import ToolbarSection from "./Toolbar.section";

export default function Detail({ alpha3Code }: { alpha3Code: any }) {
  const router = useRouter();
  const { countries } = useContext(GlobalContext);
  const findCountryData = (alpha3Code: string) => {
    return countries?.filter(
      (country: countryDataType) =>
        country?.alpha3Code.toLowerCase() === alpha3Code.toLowerCase()
    )[0];
  };
  const [country, setCountry] = useState<countryDataType | null>(null);
  useEffect(() => {
    function updateCountryData() {
      let foundedCountry = findCountryData(alpha3Code);
      setCountry(foundedCountry);
    }
    updateCountryData();
  }, [alpha3Code]);
  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <ToolbarSection />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:grid-rows-1">
        <div className="col-span-1 col-row-1 my-auto">
          <Image
            alt={"flag"}
            src={country?.flags?.svg ? country?.flags?.svg : ""}
            width={100}
            height={100}
            className="w-full"
            loading="lazy"
          />
        </div>
        <CountryInformationSection data={country} withDetail={true} />
      </div>
    </div>
  );
}
