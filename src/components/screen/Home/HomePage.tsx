import React from "react";
import ToolbarSection from "./Toolbar.section";
import CountriesListSection from "./CountriesList.section";
import useCountries from "@/logic/client/useCountries";
import Loading from "@/components/atomic/Loading";
import ErrorMessage from "@/components/atomic/ErrorMessage";

export default function Home() {
  const { errorMessage, loading } = useCountries();

  return (
    <div
      className={"flex flex-col mb-auto p-6 sm:py-4 sm:px-14 bg-transparent"}
    >
      <ToolbarSection />
      {loading ? (
        <Loading />
      ) : errorMessage !== "" ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <CountriesListSection />
      )}
    </div>
  );
}
