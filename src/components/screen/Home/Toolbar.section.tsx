import SearchInput from "@/components/atomic/SearchInput";
import Select from "@/components/atomic/Select";
import { GlobalContext } from "@/context";
import { filterByCategory, searchInCountries } from "@/logic/client/utils";
import React, { useContext } from "react";
export default function ToolbarSection() {
  const {
    products,
    filteredProducts,
    setFilteredCountries,
    searchedProducts,
    setSearchedCountries,
    searchValue,
    setSearchValue,
    filterValue,
    setFilterValue,
  } = useContext(GlobalContext);

  async function onFilterValueChange(value: any) {
    let filteredProducts = await filterByCategory(
      searchedProducts.length > 0 ? searchedProducts : products,
      value
    );
    setFilteredCountries(filteredProducts ?? []);
    setFilterValue(value);
  }

  async function onSearchValueChange(value: string) {
    let searchedProducts = await searchInCountries(
      filteredProducts.length > 0 ? filteredProducts : products,
      value
    );
    setSearchedCountries(searchedProducts ?? []);
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
            { value: "category1", label: "Category 1" },
            { value: "category2", label: "Category 2" },
            { value: "category3", label: "Category 3" },
            { value: "category4", label: "Category 4" },
            { value: "category5", label: "Category 5" },
          ]}
        />
      </div>
    </div>
  );
}
