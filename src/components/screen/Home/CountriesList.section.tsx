import ProductCard from "@/components/composite/ProductCard";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";
export default function CountriesListSection() {
  const { products, filteredCountries, searchedCountries } =
    useContext(GlobalContext);

  return (
    <div className="grid grid-cols-1 grid-rows-8 md:grid-cols-4 md:grid-rows-2 gap-14">
      {(filteredCountries.length > 0 && searchedCountries.length > 0
        ? filteredCountries.length < searchedCountries.length
          ? filteredCountries
          : searchedCountries
        : filteredCountries.length > 0
        ? filteredCountries
        : searchedCountries.length > 0
        ? searchedCountries
        : products
      )?.map((product, index) => (
        <ProductCard key={index} data={product} />
      ))}
    </div>
  );
}
