import React from "react";
import InformationRow from "./InformationRow";
export default function InformationSection({ data }: { data: any }) {
  return (
    <div className="flex flex-col px-6 py-8">
      <h2 className="my-3 font-[800]">{data?.name?.official}</h2>
      <InformationRow label="Population" value={data?.population} />
      <InformationRow label="Region" value={data?.region} />
      <InformationRow label="Capital" value={data?.capital} />
    </div>
  );
}
