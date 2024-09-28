type colorModeType = "light" | "dark";

type currencyType = {
  code: string;
  name: string;
  symbol: string;
};

type languageType = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};
type regionalBloc = {
  acronym: string;
  name: string;
};
type productDataType = {
  id: number;
  fa_name: string;
  en_name: string;
  category: string;
  category_id: number;
  image: string;
  ar_model: string;
};
type categoryDataType = {
  "id": number;
  "fa_name": string;
  "en_name": string;
  "en_description": string;
  "fa_description": string;
  "image": string;
}
