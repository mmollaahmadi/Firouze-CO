import React from "react";
import InformationRow from "./InformationRow";
export default function SecondColumn({ data }: { data: any }) {
  return (
    <div className="col-span-2 md:col-span-1">
      <InformationRow
        label="Top Level Domain"
        value={data?.name}
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
