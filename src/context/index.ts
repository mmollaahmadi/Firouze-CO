import { createContext } from "react";

export const initialState = {
  colorMode: "light",
  setColorMode: (key: colorModeType) => {},
  products: [] as productDataType[],
  setProducts: (products: productDataType[]) => {},
  filteredCountries: [] as productDataType[],
  setFilteredCountries: (filteredCountries: productDataType[]) => {},
  searchedCountries: [] as productDataType[],
  setSearchedCountries: (searchedCountries: productDataType[]) => {},
  filterValue: undefined,
  setFilterValue: (key: any) => {},
  searchValue: "",
  setSearchValue: (key: string) => {},
};
export const GlobalContext = createContext(initialState);
