import SearchInput from "@/components/atomic/SearchInput";
import Select from "@/components/atomic/Select";
import { GlobalContext } from "@/context";
import { filterByRegion } from "@/logic/client/validation";
import React, { useContext } from "react";
export default function ToolbarSection() {
  const { setFilteredCountries, countries } = useContext(GlobalContext);
  async function setFilterValue(value: string) {
    let filteredCountries = await filterByRegion(countries, value);
    setFilteredCountries(filteredCountries ?? []);
  }
  return (
    <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-6 gap-4 md:gap-0 justify-between my-8">
      <div className="col-span-3 md:col-start-1 md:col-end-3 flex justify-center items-center">
        <SearchInput />
      </div>
      <div className="col-span-2 md:col-span-1 md:col-end-7 flex justify-center items-center">
        <Select
          onValueChange={(value) => setFilterValue(value)}
          options={[
            { value: "", label: "No Filter" },
            { value: "Africa", label: "Africa" },
            { value: "Americas", label: "America" },
            { value: "Asia", label: "Asia" },
            { value: "Europe", label: "Europe" },
            { value: "Oceania", label: "Oceania" },
          ]}
        />
      </div>
    </div>
  );
}
