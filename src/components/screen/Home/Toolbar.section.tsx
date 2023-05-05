import SearchInput from "@/components/atomic/SearchInput";
import Select from "@/components/atomic/Select";
import { GlobalContext } from "@/context";
import { filterByRegion, searchInCountries } from "@/logic/client/utils";
import React, { useContext } from "react";
export default function ToolbarSection() {
  const {
    countries,
    filteredCountries,
    setFilteredCountries,
    searchedCountries,
    setSearchedCountries,
    searchValue,
    setSearchValue,
    filterValue,
    setFilterValue,
  } = useContext(GlobalContext);

  async function onFilterValueChange(value: any) {
    let filteredCountries = await filterByRegion(
      searchedCountries.length > 0 ? searchedCountries : countries,
      value
    );
    setFilteredCountries(filteredCountries ?? []);
    setFilterValue(value);
  }

  async function onSearchValueChange(value: string) {
    let searchedCountries = await searchInCountries(
      filteredCountries.length > 0 ? filteredCountries : countries,
      value
    );
    setSearchedCountries(searchedCountries ?? []);
    setSearchValue(value);
  }

  return (
    <div className="grid grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-6 gap-4 md:gap-0 justify-between my-8">
      <div className="col-span-3 md:col-start-1 md:col-end-3 flex justify-center items-center">
        <SearchInput value={searchValue} onValueChange={onSearchValueChange} />
      </div>
      <div className="col-span-2 md:col-span-1 md:col-end-7 flex justify-center items-center">
        <Select
          value={filterValue}
          onValueChange={(value) => onFilterValueChange(value)}
          options={[
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
