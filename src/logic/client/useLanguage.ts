import fa from "../../dictionaries/fa.json";
import en from "../../dictionaries/en.json";

export default function useLanguage() {

  const getContext = (lang: "fa" | "en") => {
    try {
      return lang === "fa" ? fa : en
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getContext,    
  };
}
