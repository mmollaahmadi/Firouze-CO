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

  const value = useMemo(
    () => ({ colorMode, setColorMode, countries, setCountries }),
    [colorMode, setColorMode, countries, setCountries]
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
