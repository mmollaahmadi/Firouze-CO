import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Nunito_Sans } from "next/font/google";
import { useMemo, useState } from "react";
import { GlobalContext } from "@/context";
import ScrollToTop from "@/components/atomic/ScrollToTop";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<colorModeType>("light");
  const [products, setProducts] = useState<productDataType[]>([]);
  const [categories, setCategories] = useState<categoryDataType[]>([]);
  const [filteredProducts, setFilteredCountries] = useState<productDataType[]>(
    []
  );
  const [searchedProducts, setSearchedCountries] = useState<productDataType[]>(
    []
  );
  const [filterValue, setFilterValue] = useState<any>(undefined);
  const [searchValue, setSearchValue] = useState<string>("");
  const [language, setLanguage] = useState<"fa" | "en">("fa");

  const value = useMemo(
    () => ({
      colorMode,
      setColorMode,
      products,
      setProducts,
      filteredProducts,
      setFilteredCountries,
      searchedProducts,
      setSearchedCountries,
      filterValue,
      setFilterValue,
      searchValue,
      setSearchValue,
      language,
      setLanguage,
      categories,
      setCategories,
    }),
    [
      colorMode,
      setColorMode,
      products,
      setProducts,
      filteredProducts,
      setFilteredCountries,
      searchedProducts,
      setSearchedCountries,
      filterValue,
      setFilterValue,
      searchValue,
      setSearchValue,
      language,
      setLanguage,
      categories,
      setCategories,
    ]
  );
  return (
    <GlobalContext.Provider value={value}>
      <style jsx global>{`
        html {
          font-family: ${language === "fa" ? 'IranianSans' : nunito_sans.style.fontFamily};
          direction: ${language === "fa" ? "rtl" : "ltr"};
        }
      `}</style>
        <ScrollToTop />
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}
