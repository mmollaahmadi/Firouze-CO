import React, { useContext } from "react";
import InformationRow from "./InformationRow";
import { GlobalContext } from "@/context";
export default function SecondColumn({ data }: { data: any }) {
  const { language } = useContext(GlobalContext);

  return (
    <div className="col-span-2 md:col-span-1">
      <InformationRow
        label={`${language === "en" ? "Top Level Domain" : "نام محصول"}`}
        value={data?.[`${language}_name`]}
      />
      <InformationRow
        label="Feature 5"
        value={data?.currencies
          ?.map((element: any) => {
            return element.name;
          })
          .join(" ")}
      />
      <InformationRow
        label="Feature 6"
        value={data?.languages
          ?.map((element: any) => {
            return element.name;
          })
          .join(" ")}
      />
    </div>
  );
}
