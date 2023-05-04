import CountryCard from "@/components/composite/CountryCard";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function CountriesListSection() {
  const { countries } = useContext(GlobalContext);

  return (
    <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14">
      {countries?.map((country, index) => (
        <CountryCard key={index} data={country} />
      ))}
    </div>
  );
}
