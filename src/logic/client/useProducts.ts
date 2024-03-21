import { useContext, useEffect, useState } from "react";
import backend from "@/data/backend";
import { GlobalContext } from "@/context";
import { sortProducts } from "./utils";
import data from "../../data/static/data.json";

export default function useProducts() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useContext(GlobalContext);

  const getAllCountries = async () => {
    try {
      setLoading(true);
      const { ok, result, error } = await backend.giveMeAllCountries();
      if (ok) {
        setErrorMessage("");
        setLoading(false);
        // sortProducts(result);
        setProducts(result);
      } else {
        setLoading(false);
        setErrorMessage("Server Side Not Available!");
        console.error(error);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage("Client side exception");
      return false;
    }
  };

  const readAllProducts = () => {
    try {
      setProducts(data?.products)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    //getAllCountries();
    readAllProducts();
  }, []);

  return {
    products,
    errorMessage,
    loading,
  };
}
