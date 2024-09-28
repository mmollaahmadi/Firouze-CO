import { getDictionary } from "@/logic/client/dictionaries";
import { createContext } from "react";

export const initialState = {
  colorMode: "light",
  setColorMode: (key: colorModeType) => {},
  products: [] as productDataType[],
  setProducts: (products: productDataType[]) => {},
  filteredProducts: [] as productDataType[],
  setFilteredCountries: (filteredProducts: productDataType[]) => {},
  searchedProducts: [] as productDataType[],
  setSearchedCountries: (searchedProducts: productDataType[]) => {},
  filterValue: undefined,
  setFilterValue: (key: any) => {},
  searchValue: "",
  setSearchValue: (key: string) => {},
  language: "fa" as "fa" | "en",
  setLanguage: (language: "fa" | "en") => {},
  categories: [] as categoryDataType[],
  setCategories: (categories: categoryDataType[]) => {},
};
export const GlobalContext = createContext(initialState);
