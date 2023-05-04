import { createContext } from "react";

export const initialState = {
  colorMode: "light",
  setColorMode: (key: colorModeType) => {},
  countries: [] as countryDataType[],
  setCountries: (countries: countryDataType[]) => {},
  filteredCountries: [] as countryDataType[],
  setFilteredCountries: (filteredCountries: countryDataType[]) => {},
};
export const GlobalContext = createContext(initialState);
