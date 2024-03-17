import { GlobalContext } from "@/context";
import { useContext } from "react";

export function sortProducts(products: productDataType[]) {
  try {
    products.sort(
      (c1, c2) =>
        c1.name.localeCompare(c2.name)
    );
  } catch (error) {
    console.error(error);
  }
}

export function filterByRegion(products: productDataType[], name: string) {
  try {
    if (name === "") {
      return null;
    } else {
      return products.filter((product) => product.name === name);
    }
  } catch (error) {
    console.error(error);
  }
}

export function searchInCountries(
  products: productDataType[],
  searchedValue: string
) {
  try {
    if (searchedValue === "") {
      return null;
    } else {
      return products.filter(
        (product) =>
          product.name.localeCompare(searchedValue, undefined, {
            sensitivity: "accent",
          }) === 0 ||
          similarity(searchedValue, product.name) > 0.7 ||
          product.name.toLowerCase().includes(searchedValue.toLowerCase())
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

// export function getCountryNameByAlpha3Code(alpha3Code: string) {
//   try {
//     const { products } = useContext(GlobalContext);
//     return products.filter((product) => product.id === alpha3Code)[0]
//       ?.name;
//   } catch (error) {
//     console.error(error);
//   }
// }
