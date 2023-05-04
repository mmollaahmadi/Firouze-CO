import React from "react";
import ToolbarSection from "./Toolbar.section";
import CountriesListSection from "./CountriesList.section";

export default function Home() {
  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <ToolbarSection />
      <CountriesListSection />
    </div>
  );
}
