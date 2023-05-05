import { createContext } from "react";

export const initialState = {
  colorMode: "light",
  setColorMode: (key: colorModeType) => {},
  countries: [] as countryDataType[],
  setCountries: (countries: countryDataType[]) => {},
  filteredCountries: [] as countryDataType[],
  setFilteredCountries: (filteredCountries: countryDataType[]) => {},
  searchedCountries: [] as countryDataType[],
  setSearchedCountries: (searchedCountries: countryDataType[]) => {},
  filterValue: undefined,
  setFilterValue: (key: any) => {},
  searchValue: "",
  setSearchValue: (key: string) => {},
};
export const GlobalContext = createContext(initialState);
