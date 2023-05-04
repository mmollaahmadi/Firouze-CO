import React from "react";
import InformationRow from "./InformationRow";
export default function SecondColumn({ data }: { data: any }) {
  return (
    <div className="col-span-2 md:col-span-1">
      <InformationRow
        label="Top Level Domain"
        value={data?.topLevelDomain.join(" ")}
      />
      <InformationRow
        label="Currencies"
        value={data?.currencies
          .map((element: any) => {
            return element.name;
          })
          .join(" ")}
      />
      <InformationRow
        label="Languages"
        value={data?.languages
          .map((element: any) => {
            return element.name;
          })
          .join(" ")}
      />
    </div>
  );
}
