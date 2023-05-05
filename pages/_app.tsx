import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Nunito_Sans } from "next/font/google";
import { useMemo, useState } from "react";
import { GlobalContext } from "@/context";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<colorModeType>("light");
  const [countries, setCountries] = useState<countryDataType[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<countryDataType[]>(
    []
  );
  const [searchedCountries, setSearchedCountries] = useState<countryDataType[]>(
    []
  );
  const [filterValue, setFilterValue] = useState<any>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode,
      countries,
      setCountries,
      filteredCountries,
      setFilteredCountries,
      searchedCountries,
      setSearchedCountries,
      filterValue,
      setFilterValue,
      searchValue,
      setSearchValue,
    }),
    [
      colorMode,
      setColorMode,
      countries,
      setCountries,
      filteredCountries,
      setFilteredCountries,
      searchedCountries,
      setSearchedCountries,
      filterValue,
      setFilterValue,
      searchValue,
      setSearchValue,
    ]
  );
  return (
    <GlobalContext.Provider value={value}>
      <style jsx global>{`
        html {
          font-family: ${nunito_sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
