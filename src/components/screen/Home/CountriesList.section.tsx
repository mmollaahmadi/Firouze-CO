import CountryCard from "@/components/atomic/CountryCard";
import React from "react";
import { countries } from "./Data";
export default function CountriesListSection() {
  return (
    <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14">
      {countries.map((country, index) => (
        <CountryCard key={index} data={country} />
      ))}
    </div>
  );
}
