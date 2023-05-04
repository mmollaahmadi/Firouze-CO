import { GlobalContext } from "@/context";
import { useContext } from "react";

export function sortCountries(countries: countryDataType[]) {
  try {
    countries.sort(
      (c1, c2) =>
        c2.population - c1.population || c1.name.localeCompare(c2.name)
    );
  } catch (error) {
    console.error(error);
  }
}

export function filterByRegion(countries: countryDataType[], region: string) {
  try {
    if (region === "") {
      return null;
    } else {
      return countries.filter((country) => country.region === region);
    }
  } catch (error) {
    console.error(error);
  }
}

export function getCountryNameByAlpha3Code(alpha3Code: string) {
  try {
    const { countries } = useContext(GlobalContext);
    return countries.filter((country) => country.alpha3Code === alpha3Code)[0]
      ?.name;
  } catch (error) {
    console.error(error);
  }
}
