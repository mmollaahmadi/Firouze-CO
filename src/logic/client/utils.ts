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

export function searchInCountries(
  countries: countryDataType[],
  searchedValue: string
) {
  try {
    if (searchedValue === "") {
      return null;
    } else {
      return countries.filter(
        (country) =>
          country.name.localeCompare(searchedValue, undefined, {
            sensitivity: "accent",
          }) === 0 ||
          similarity(searchedValue, country.name) > 0.7 ||
          country.name.toLowerCase().includes(searchedValue.toLowerCase())
      );
    }
  } catch (error) {
    console.error(error);
  }
}
function editDistance(s1: string, s2: string) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  var costs = new Array();
  for (var i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (var j = 0; j <= s2.length; j++) {
      if (i == 0) costs[j] = j;
      else {
        if (j > 0) {
          var newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}
function similarity(s1: string, s2: string) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (
    (longerLength - editDistance(longer, shorter)) /
    parseFloat(longerLength.toString())
  );
}

export function getCountryNameByAlpha3Code(alpha3Code: string) {
  try {
    const { countries } = useContext(GlobalContext);
    return countries.filter((country) => country.alpha3Code === alpha3Code)[0]
      ?.nativeName;
  } catch (error) {
    console.error(error);
  }
}
