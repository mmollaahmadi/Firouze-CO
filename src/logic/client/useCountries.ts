import { useContext, useEffect, useState } from "react";
import backend from "@/data/backend";
import { GlobalContext } from "@/context";
import { sortCountries } from "./utils";

export default function useCountries() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { countries, setCountries } = useContext(GlobalContext);

  const getAllCountries = async () => {
    try {
      setLoading(true);
      const { ok, result, error } = await backend.giveMeAllCountries();
      if (ok) {
        setErrorMessage("");
        setLoading(false);
        sortCountries(result);
        setCountries(result);
      } else {
        setLoading(false);
        setErrorMessage(error);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage("Client side exception");
      return false;
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return {
    countries,
    errorMessage,
    loading,
  };
}
